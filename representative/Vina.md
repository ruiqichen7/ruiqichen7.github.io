---
layout: page
title: Vina Hardware Acceleration
permalink: /representative/Vina/
---

<h4 class="project-title">What is dokcing??</h4>


<p style="font-size:20px;">The goal of ligand—protein docking is to predict the predominant binding mode(s) of a ligand with a protein of known three-dimensional structure.</p>

<div class="img-center">
  <img src="/images/representative/Vina/docking.gif" alt="demo" width="400">
  <p><em>Docking demo</em></p>
</div>


<h4 class="project-title">Why Vina?</h4>

<p style="font-size:20px;">AutoDock Vina is usually recommended as the first-line tool in the implementation of molecular docking due to its docking speed and accuracy</p>

<div class="img-center">
  <img src="/images/representative/Vina/vinarank.png" alt="efforts" width="img-fluid">
  <p><em>The rank of molecular docking algorithms</em></p>
</div>

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


<h4 class="project-title">The efforts we do for accelerating Vina </h4>

<div class="img-center">
  <img src="/images/representative/Vina/efforts.png" alt="efforts" width="img-fluid">
  <p><em>Roadmap</em></p>
</div>


<h4 class="project-title">Vina-FPGA</h4>

<div class="project-block">
  <!-- ① 高亮：左图右文 -->
  <div class="paper-box">
    <div class="paper-box-image">
      <img src="/images/representative/Vina/vinafpgacluster.png" alt="Research">
    </div>
    <div class="paper-box-text">
      <h4 class="project-sub-title">Highlights</h4>
      <ul>
        <li>1st FPGA/FPGA cluster accelerator with a significant speedup for AutoDock Vina with fixed-point quantization and low-level parallelism</li>
        <li>Hybrid fixed-point quantization</li>
        <li>Parallel calculation of inter-molecular energy and intra-molecular energy with their internal pipelines</li>
        <li>A novel parallel AG module design</li>
      </ul>
    </div>
  </div>

  <!-- ② 表格：不加额外卡片边框 -->
  <div class="project-row">
    <h4 class="project-sub-title">Performance Metrics</h4>
    <table class="perf-table">
      <thead>
        <tr>
          <th>Metrics</th>
          <th>CPU</th>
          <th>Vina-FPGA</th>
          <th>Vina-FPGA2</th>
          <th>Vina-FPGA-Cluster</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Latency</td>
          <td>182.28s</td><td>48.40s</td><td>14.50s</td><td>6.67s</td>
        </tr>
        <tr>
          <td>Speed up</td>
          <td>1×</td><td>3.7×</td><td>12.6×</td><td>27.33×</td>
        </tr>
        <tr>
          <td>Power</td>
          <td>47.34W</td><td>4.70W</td><td>4.70W</td><td>19.48W</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- ③ Publications：作为小卡片放在大框里 -->
  <div class="paper-section">
    <h4 class="project-sub-title">Publications</h4>
    <ul>
      <li><strong>Vina-FPGA 2.0: A High-Level Parallelized Hardware-Accelerated Molecular Docking Tool Based on Inter-Module Pipeline</strong><br><em>FITEE, 2025</em></li>
      <li><strong><a href="https://ieeexplore.ieee.org/abstract/document/10500753" target="_blank">Vina-FPGA-Cluster: Multi-FPGA Based Molecular Docking Tool with High-Accuracy and Multi-Level Parallelism</a></strong><br><em>TBioCAS, 2024</em></li>
      <li><strong><a href="https://ieeexplore.ieee.org/document/9940230" target="_blank">Vina-FPGA: A Hardware-Accelerated Molecular Docking Tool With Fixed-Point Quantization and Low-Level Parallelism</a></strong><br><em>TVLSI, 2023</em></li>
    </ul>
  </div>
</div>

<h4 class="project-title">Vina-GPU</h4>

<div class="project-block">
  <!-- ① 高亮：左图右文 -->
  <div class="paper-box">
    <div class="paper-box-image">
      <img src="/images/representative/Vina/vinagpu.png" alt="Vina-GPU">
    </div>
    <div class="paper-box-text">
      <h4 class="project-sub-title">Highlights</h4>
      <ul>
        <li>1st OpenCL-based GPU implementation for AutoDock Vina</li>
        <li>Multi-threaded width adjustment with reduced search depth without losing accuracy</li>
        <li>Considerable accuracy and speedup ratio (191.68×)</li>
      </ul>
    </div>
  </div>

  <!-- ② GPU 这里没有表格，所以直接跳到 Publications -->
  <div class="paper-section">
    <h4 class="project-sub-title">Publication</h4>
    <ul>
      <li>
        <strong><a href="https://www.mdpi.com/1420-3049/27/9/3041" target="_blank">
          Accelerating AutoDock Vina with GPUs
        </a></strong><br>
        <em>Molecules, 2022</em>
      </li>
    </ul>
  </div>
</div>

<h4 class="project-title">Vina-Phone</h4>

<div class="project-block">
  <!-- ① 高亮：左图右文 -->
  <div class="paper-box">
    <div class="paper-box-image">
      <img src="/images/representative/Vina/vinamobile.png" alt="Vina-Phone">
    </div>
    <div class="paper-box-text">
      <h4 class="project-sub-title">Highlights</h4>
      <ul>
        <li>Leveraging the computational resources of discarded smartphones</li>
        <li>Providing a cost-effective method to lower the barrier of drug discovery</li>
        <li>Using the PCSA algorithm to ensure thermal dissipation while accelerating virtual screening</li>
      </ul>
    </div>
  </div>

  <!-- ② Publications -->
  <div class="paper-section">
    <h4 class="project-sub-title">Publication</h4>
    <ul>
      <li>
        <strong><a href="https://ieeexplore.ieee.org/abstract/document/10884806" target="_blank">
          EEVS: Redeploying Discarded Smartphones for an Economical and Ecological Drug Molecules Virtual Screening
        </a></strong><br>
        <em>TSC, 2024</em>
      </li>
    </ul>
  </div>
</div>



