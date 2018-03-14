
    var treeData = [];
    var rootNode = new Node("One", 23832, "test.com", 48248);

    function push(newNode, nodeList){
      nodeList.append(newNode);
    }

    function addNode(title, id, link, openerTabId){
        if(openerTabId == undefined){
            rootNode = new Node(title,id,link,openerTabId);
        }
        else{
            var temp = new Node(title,id,link,openerTabId);
            addChild(openerTabId, temp);
        }
    }

    function Tree() {
        alert("Tree created");
        treeData.push(rootNode);
        var treeDataParsed = JSON.stringify(treeData);
    }
    function Node(title, id, link, openerTabId) {
        this.name = title;
        this.id = id;
        this.url = link;
        this.parent = openerTabId;
        this.children = {};

        alert("New Node Object Created: "
        +title+"\n id: " + id
        +"\n link: " + link
        +"\n openerTabId: " + openerTabId
        // +"\n children: " + children
        );
        // this._children = children;
        // var children_counter=0;
        // this._openerTabId;
    }

    function addChild(openerTabId, tab){
        addChildHelper(openerTabId, rootNode, tab);
        alert("Children added");
    }

    function addChildHelper(parentId, currTab, nTab) {
    	if (currTab.name == parentId) {
    		// use push
    		push(nTab, currTab.children);
    	} else {
    		for (var i = 0; i < currTab.children.length; i++) {
    			addChildHelper(parentId, currTab.children[i], nTab);
    		}
    	}
    }

    // function (parent, child) {
        // (parent._children).push(child);
    // }


    // function Traversal(node){
    //     console.log(node._title);
    //     for(var i=0;i<node._children.length;i++){
    //         Traversal(node._children[i]);
    //     }

    // }
    // var run = "hello";

// var roots = { 0:targetJson};










$(document).ready(function() {
    $('.title').click(function() {
        $(".title").css({ "color": "red" });
        d3.selectAll("p").style("color", "white").fadeIn(300);
    });
    var tree = new Tree();


    /******* TESTING JSON AND D3 *********/
// var tree1 = JSON.stringify(tree._root)
// var treeData = JSON.parse(tree1);
// console.log(tree1);

// Traversal(tree._root);
var treeData2 = [
  {
    "name": "Root Node",
    "parent": "null",
    "children": [
      {
        "name": "Level 2: A",
        "parent": "Top Level",
        "children": [
          {
            "name": "Level 3: C",
            "parent": "Level 2: A"
          },
          {
            "name": "Level 3: D",
            "parent": "Level 2: A"
          }
        ]
      },
      {
        "name": "Level 2: B",
        "parent": "Top Level"
      }
    ]
  }
];

    var treeDataParsed = JSON.stringify(treeData);
    console.log(treeData);
    console.log(treeData2);

















/************* VISUALIZATION *********************/
var margin = {top: 20, right: 120, bottom: 20, left: 120},
  width = 800- margin.right - margin.left,
  height = 500 - margin.top - margin.bottom;

var svg = d3.select("#body")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom);

var i = 0,
  duration = 750,
  root;

var tip = d3.tip()
          .attr('class', 'd3-tip')
          .offset([10, 0])
          .direction("s")
          .html(function(d) {
              return d.name;
          });

svg.call(tip);

var tree = d3.layout.tree()
  .size([height, width]);

var diagonal = d3.svg.diagonal()
  .projection(function(d) { return [d.y, d.x]; });


root = treeData[0];
root.x0 = 200;
root.y0 = 100;

console.log(rootNode);

update(root);

d3.select(self.frameElement).style("height", "500px");

function update(source) {

  // Compute the new tree layout.
  var nodes = tree.nodes(root).reverse(),
    links = tree.links(nodes);

  // Normalize for fixed-depth.
  nodes.forEach(function(d) { d.y = d.depth * 180; });

  // Update the nodes…
  var node = svg.selectAll("g.node")
    .data(nodes, function(d) { return d.id || (d.id = ++i); });

  // Enter any new nodes at the parent's previous position.
  var nodeEnter = node.enter().append("g")
    .attr("class", "node")
    .attr("transform", function(d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
    .on("click", click);

  nodeEnter.append("circle")
    .attr("r", 1e-6)
    .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; })
    .style("transform", "translate(200px,0px")
    .on('mouseover', tip.show)
    .on('mouseout', tip.hide);

  nodeEnter.append("text")
    .attr("x", function(d) { return d.children || d._children ? -13 : 13; })
    .attr("dy", ".35em")
    .attr("text-anchor", function(d) { return d.children || d._children ? "end" : "start"; })
    .text(function(d) { return d._title; })
    .style("transform", "translate(200px,0px")
    .style("fill-opacity", 1e-6);

  // Transition nodes to their new position.
  var nodeUpdate = node.transition()
    .duration(duration)
    .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });

  nodeUpdate.select("circle")
    .attr("r", 10)
    .style("fill", function(d) { return "black"});

  nodeUpdate.select("text")
    .style("fill-opacity", 1);

  // Transition exiting nodes to the parent's new position.
  var nodeExit = node.exit().transition()
    .duration(duration)
    .attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
    .remove();

  nodeExit.select("circle")
    .attr("r", 1e-6);

  nodeExit.select("text")
    .style("fill-opacity", 1e-6);

  // Update the links…
  var link = svg.selectAll("path.link")
    .style("transform", "translate(200px,0px")
    .data(links, function(d) { return d.target.id; });

  // Enter any new links at the parent's previous position.
  link.enter().insert("path", "g")
    .attr("class", "link")
    .style("transform", "translate(200px,0px")
    .attr("d", function(d) {
    var o = {x: source.x0, y: source.y0};
    return diagonal({source: o, target: o});
    });

  // Transition links to their new position.
  link.transition()
    .duration(duration)
    .attr("d", diagonal);

  // Transition exiting nodes to the parent's new position.
  link.exit().transition()
    .duration(duration)
    .attr("d", function(d) {
    var o = {x: source.x, y: source.y};
    return diagonal({source: o, target: o});
    })
    .remove();

  // Stash the old positions for transition.
  nodes.forEach(function(d) {
  d.x0 = d.x;
  d.y0 = d.y;
  });
}

// Toggle children on click.
function click(d) {
  if (d.children) {
  d._children = d.children;
  d.children = null;
  } else {
  d.children = d._children;
  d._children = null;
  }
  update(d);
}

});
