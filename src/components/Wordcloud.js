import React, { useEffect } from "react";
import * as d3 from "d3";
import cloud from "d3-cloud";
import { KMR, KKMA } from "koalanlp/API";
import { initialize } from 'koalanlp/Util';
import { Tagger, Parser } from 'koalanlp/proc';

const Wordcloud = () => {
  
  // const getData = async () => {
  //   await initialize({packages: {KMR: '2.0.4', KKMA: '2.0.4'}, verbose: true})
  // }

  const end = (words) => {
    d3.select("#word-cloud")
        .append("svg")
        .attr("width", 500)
        .attr("height", 500)
        .style("border", "1px solid black")
      .append("g")
        .attr("transform", "translate(" + 500 / 2 + "," + 500 / 2 + ")")
      .selectAll("text")
        .data(words)
      .enter().append("text")
        .style("font-size", function(d) { return d.size + "px"; })
        .style("font-family", "Impact")
        .attr("text-anchor", "middle")
        .attr("transform", function(d) {
          return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
        })
        .text(function(d) { return d.text; });
  }

    const makeCloud = data => {
      cloud()
      .size([400, 400])
      .words(data.map(function(d) {
          return {text: d, size: 10 + Math.random() * 90, test: "haha"};
      }))
      .padding(5)
      .font("Impact")
      .fontSize(function(d) { return d.size; })
      .on("end", end)
      .start();
    }

  useEffect(() => {
    // getData();
    const data = [
        "Hello", "world", "normally", "you", "want", "more", "words",
        "than", "this"]
    makeCloud(data)
  })

  return (
    <div>
      <h1>리뷰 분석 결과</h1>
      <div id="word-cloud"></div>
    </div>
  )
}

export default Wordcloud;