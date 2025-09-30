---
layout: page
title: Vina Hardware Acceleration
permalink: /representative/Vina/
---

## What is docking?


<p style="font-size:20px;">The goal of ligand—protein docking is to predict the predominant binding mode(s) of a ligand with a protein of known three-dimensional structure.</p>

<div class="img-center">
  <img src="/images/representative/Vina/docking.gif" alt="demo" width="400">
  <p><em>Docking demo</em></p>
</div>


## Why Vina?
<p style="font-size:20px;">AutoDock Vina is usually recommended as the first-line tool in the implementation of molecular docking due to its docking speed and accuracy</p>

![](/images/representative/Vina/vinarank.png)

<p style="font-size:20px; line-height:1.6;">
Vina is painfully 
<span style="color:red; font-weight:bold;">time-consuming</span> 
due to the massive combinatorial possibilities of multi-dimensional data. 
Previous research has managed to reduce the inference time from 
<span style="color:red; font-weight:bold;">475 years</span> 
to 
<span style="color:red; font-weight:bold;">2 weeks</span> 
by leveraging 
<span style="color:red; font-weight:bold;">10,000 CPUs</span>.
</p>


## The efforts we do for accelerating Vina

<div class="img-center">
  <img src="/images/representative/Vina/efforts.png" alt="efforts" width="400">
  <p><em>Roadmap</em></p>
</div>


<h3>Vina-FPGA</h3>

<div class="paper-box">

  <!-- Highlights -->
  <div class="paper-section">
    <div class="paper-box-image">
      <img src="/images/representative/Vina/vinafpgacluster.png" alt="Research">
    </div>
    <div class="paper-box-text">
      <h4>Highlights</h4>
      <ul>
        <li>1st FPGA/FPGA cluster accelerator with a significant speedup...</li>
        <li>Hybrid fixed-point quantization</li>
        <li>Parallel calculation of inter-molecular energy...</li>
        <li>A novel parallel AG module design</li>
      </ul>
    </div>
  </div>

  <!-- Table -->
  <div class="paper-section">
    <h4>Performance Metrics</h4>
    <table class="perf-table">
      <thead>
        <tr>
          <th>Metric</th>
          <th>CPU</th>
          <th>Vina-FPGA</th>
          <th>Vina-FPGA2</th>
          <th>Vina-FPGA-Cluster</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Latency</td>
          <td>182.28s</td>
          <td>48.40s</td>
          <td>14.50s</td>
          <td>6.67s</td>
        </tr>
        <tr>
          <td>Speed up</td>
          <td>1×</td>
          <td>3.7×</td>
          <td>12.6×</td>
          <td>27.33×</td>
        </tr>
        <tr>
          <td>Power</td>
          <td>47.34W</td>
          <td>4.70W</td>
          <td>4.70W</td>
          <td>19.48W</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Publications -->
  <div class="paper-section">
    <h4>Publications</h4>
    <ul>
      <li><b>Vina-FPGA 2.0: A High-Level Parallelized...</b><br><i>FITEE, 2025</i></li>
      <li><b><a href="https://ieeexplore.ieee.org/abstract/document/10500753" target="_blank">Vina-FPGA-Cluster...</a></b><br><i>TBioCAS, 2024</i></li>
      <li><b><a href="https://ieeexplore.ieee.org/document/9940230" target="_blank">Vina-FPGA...</a></b><br><i>TVLSI, 2023</i></li>
    </ul>
  </div>

</div>

