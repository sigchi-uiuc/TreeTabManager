// alert("title" + tab.id);
// chrome.tabs.getCurrent(function(tab) {
  
// }
// alert("Hello");
// chrome.browserAction.onClicked.addListener(getTab);

// function getTab(tab) {
//   alert("Hello");
//   alert(tab.id);
// }
//     // var treeData = document.getElementById("main");

//     /******* TESTING JSON AND D3 *********/
//     // var tree1 = JSON.stringify(tree._root)
//     // var treeData = JSON.parse(tree1);
//     // console.log(tree1);

//     // Traversal(tree._root);

//     // var visualize = function(data){
//     /***** TEST ******/
// var treeData2;
// var treeData;
//     chrome.windows.getCurrent(function(w) {
//        treeData2 = localStorage.getItem("forest");
//        treeData3 = JSON.parse(treeData2)[w.id];
//        console.log(treeData3);
//         treeData = [treeData3];

//     var margin = {top: 80, right: 0, bottom: 50, left: 30},
//       width = 1600 - margin.right - margin.left,
//       height = 500 - margin.top - margin.bottom;

//     var svg = d3.select("#body")
//             .append("svg")
//             .attr("width", width + margin.left + margin.right)
//             .attr("height", height + margin.top + margin.bottom);

//     var i = 0, root;

//     var tip = d3.tip()
//               .attr('class', 'd3-tip')
//               .offset([10, 0])
//               .direction("s")
//               .html(function(d) {
//                   var hist = "";
//                   for (var i = d.history.length - 1; i >= 0; i--) {
//                       hist += d.history[i] + "<br>";
//                   }
//                   return hist;
//               });

//     svg.call(tip);

//     var tree = d3.layout.tree()
//       .size([height, width]);

//     var diagonal = d3.svg.diagonal()
//       .projection(function(d) { return [d.y, d.x]; });


//     root = treeData[0];
//     root.x0 = 200;
//     root.y0 = 100;

//     console.log(treeData[0]);

//     update(root, tree, svg, tip);

//     d3.select(self.frameElement).style("height", "500px");

//   });

//   function update(source, tree, svg, tip) {

//     // Compute the new tree layout.
//     var nodes = tree.nodes(source).reverse(),
//       links = tree.links(nodes);

//     // Normalize for fixed-depth.
//     nodes.forEach(function(d) { d.y = d.depth * 180; });

//     // Update the nodes…
//     var node = svg.selectAll("g.node")
//       .data(nodes, function(d) { return d.id || (d.id = ++i); });

//     // Enter any new nodes at the parent's previous position.
//     var nodeEnter = node.enter().append("g")
//       .attr("class", "node")
//       .attr("transform", function(d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
//       .on("click", click);

//     nodeEnter.append("circle")
//       .attr("r", 1e-6)
//       .style("stroke", function(d) {
//         if (d.active) {
//           return "#00cc66";
//         }
//         else {
//           return "#f70404";
//         }
//       })
//       .style("transform", "translate(200px,0px")
//       .on('mouseover', tip.show)
//       .on('mouseout', tip.hide);

//     nodeEnter.append("text")
//       .attr("x", function(d) { return d.children || d._children ? -13 : 13; })
//       .attr("dy", ".35em")
//       .attr("text-anchor", function(d) { return d.children || d._children ? "end" : "start"; })
//       .text(function(d) {
//                 var ret = d.name.substr(0,6) + "...";
//                 return ret;; })
//       .style("transform", "translate(200px,0px")
//       .style("fill-opacity", 1e-6);

//     // Transition nodes to their new position.
//     var duration = 750;
//     var nodeUpdate = node.transition()
//       .duration(duration)
//       .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });

//     nodeUpdate.select("circle")
//       .attr("r", 10);

//     nodeUpdate.select("text")
//       .style("fill-opacity", 1);

//     // Transition exiting nodes to the parent's new position.
//     var nodeExit = node.exit().transition()
//       .duration(duration)
//       .attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
//       .remove();

//     nodeExit.select("circle")
//       .attr("r", 1e-6);

//     nodeExit.select("text")
//       .style("fill-opacity", 1e-6);

//     // Update the links…
//     var link = svg.selectAll("path.link")
//       .style("transform", "translate(200px,0px")
//       .data(links, function(d) { return d.target.id; });

//     // Enter any new links at the parent's previous position.
//     link.enter().insert("path", "g")
//       .attr("class", "link")
//       .style("transform", "translate(200px,0px")
//       .attr("d", function(d) {
//       var o = {x: source.x0, y: source.y0};
//       return diagonal({source: o, target: o});
//       });

//     // Transition links to their new position.
//     link.transition()
//       .duration(duration)
//       .attr("d", diagonal);

//     // Transition exiting nodes to the parent's new position.
//     link.exit().transition()
//       .duration(duration)
//       .attr("d", function(d) {
//       var o = {x: source.x, y: source.y};
//       return diagonal({source: o, target: o});
//       })
//       .remove();

//     // Stash the old positions for transition.
//     nodes.forEach(function(d) {
//     d.x0 = d.x;
//     d.y0 = d.y;
//     });
//   }

//   // Toggle children on click.
//   function click(d) {
//     if (d.children) {
//     d._children = d.children;
//     d.children = null;
//     } else {
//     d.children = d._children;
//     d._children = null;
//     }
//     update(d);
//   }
// }

// });
