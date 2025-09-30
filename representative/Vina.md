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


### Vina-FPGA

<div class='paper-box'>
  <div class='paper-box-image'>
    <img src='/images/representative/Vina/vinafpgacluster.png' alt="Research" width="80%">
  </div>

  <div class='paper-box-text' markdown="1">

**Highlights**

- 1st FPGA/FPGA cluster accelerator with a significant speedup for AutoDock Vina with fixed-point quantization and low-level parallelism  
- Hybrid fixed-point quantization  
- Parallel calculation of inter-molecular energy and intra-molecular energy with their internal pipelines  
- A novel parallel AG module design  

  </div>
</div>

---

| Metric of performance | CPU | Vina-FPGA | Vina-FPGA2 | Vina-FPGA-Cluster |
|-----------------------|-----|-----------|------------|------------------|
| Latency               | 182.28s | 48.40s | 14.50s | 6.67s |
| Speed up              | 1× | 3.7× | 12.6× | 27.33× |
| Power                 | 47.34W | 4.70W | 4.70W | 19.48W |

---

**Publications**

<div class="pub-card" markdown="1">

- **Vina-FPGA 2.0: A High-Level Parallelized Hardware-Accelerated Molecular Docking Tool Based on Inter-Module Pipeline**  
  *FITEE, 2025*  

- **[Vina-FPGA-Cluster: Multi-FPGA Based Molecular Docking Tool with High-Accuracy and Multi-Level Parallelism](https://ieeexplore.ieee.org/abstract/document/10500753)**  
  *TBioCAS, 2024*  

- **[Vina-FPGA: A Hardware-Accelerated Molecular Docking Tool With Fixed-Point Quantization and Low-Level Parallelism](https://ieeexplore.ieee.org/document/9940230)**  
  *TVLSI, 2023*  

</div>

