$(document).ready(function() {
    $('.title').click(function() {
        $(".title").css({ "color": "red" });
        d3.selectAll("p").style("color", "white").fadeIn(300);
    });
    var tree = new Tree();
    // alert((tree._root)._alive);
    var node1 = new Node(
        true,
        234976,
        "hello.com",
        "hellothere",
        "hello.com/favicon.jpg",
         []
    );

    var node2 = new Node(
        true,
        23423,
        "hey.com",
        "heythere2",
        "hey.com/favicon.jpg",
         []
    );
    // console.log(node1._title);
    AddChild(tree._root, node1);
    AddChild(node1, node2);
    // console.log(hello);
    // console.log
    console.log(node1._title);

    /******* TESTING JSON AND D3 *********/
// var tree1 = JSON.stringify(tree._root)
// var treeData = JSON.parse(tree1); 
// console.log(tree1);

Traversal(tree._root);
var treeData = [
  {
    "name": "Root Node",
    "parent": "null",
    "children": [
      {
        "name": "Level 2: A",
        "parent": "Top Level",
        "children": [
          {
            "name": "Son of A",
            "parent": "Level 2: A"
          },
          {
            "name": "Daughter of A",
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


/***** TEST ******/
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

console.log(root);

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

