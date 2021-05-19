# Visualizing Uncertainty in Molecular Simulation

![alt text](https://github.com/6859-sp21/final-project-atomistic-uncertainty/blob/main/figs/intro/atomsim3.png)

## Team
Our team is comprised by Aik Jun Tan, Franklin Morgan, and Daniel Schwalbe-Koda.

## Abstract
Academic work is often communicated through peer-reviewed research papers, conference presentations and occasional media coverage. While these formats allow for a full or partial understanding of the results, they are often limited in availability or require considerable effort to be read by an expert  outside of the field. In this work, we use an interactive visualization to summarize the main insights from a research paper. As an example, we focus on a recent paper addressing uncertainty quantification in materials simulation. To address the known difficulties of representing uncertainty in high-dimensional spaces, we use a scrollytelling narrative to gradually build the concepts of the paper. In this framework, dynamic images allow the viewer to interact with data not readily available in the article, thus improving the reading experience. We qualitatively validate our approach by showing the visualizations to experts and non-experts in the field. Viewers exposed to the simplified approach report a higher curiosity towards the research results regardless of their level of expertise. Moreover, expert viewers report that this interactive article could greatly help their understanding of new research articles. We believe that interactive visualizations can increase the exposure of academic articles communicate their results more efficiently both to experts and non-experts.

## Paper
The design analysis can found on [this link](https://github.com/6859-sp21/final-project-atomistic-uncertainty/blob/main/final/2021_UncertaintyVis.pdf)

## Video
The video description can found on [this link](https://drive.google.com/file/d/1lE7nfRzzB17LngJpSBN7uFlpHWqnBToE/view?usp=sharing)

## Use Instructions 
This visualization is designed to be self-explanatory and should require minimal effort for exploration.

## Visualization
The visualization can be accessed using [this link](https://6859-sp21.github.io/final-project-atomistic-uncertainty)


# Design Process

## Design decision

Our visualization is centred on narrative story-telling through user-controlled pace because our team believes that it is the most effective way to understand a complex subject matter. We implemented this strategy by building a “scrolly-telling” tool which comprises four primary components: (1) the scroller, (2) the descriptors, (3) the visuals, and (4) the navigator.

The scroller is the key component which allows users to control the pace of the read by providing the scrolling functionality. In building our scroller, we set triggers at select page intervals to ensure that the right mix of descriptors and visuals appear at the right time. This is extremely important for emphasis and flow; specific ideas should be focused on only after pre-requisite knowledge has been imparted. Users will get to control how fast they want the ideas to flow using the scroller.

The descriptors are the texts which provide contextual information on the visuals being shown and are positioned on the left side of the browser. They are initially set to zero opacity and are designed to fade into vision along with the visuals as the section is scrolled into view. They will fade away as the page is further scrolled. In producing the descriptor, we made a conscious decision to include only the minimal text required to describe a visual. This is done to avoid cluttering and to generate focus.

The visuals are the images and graphs that condense all the findings of the research. They are rich in information and are complementary to the descriptor. Unlike the descriptors which position and opacity change with scrolling, only the opacity of the visuals changes with scrolling. Select images fade into vision as user scrolls through the page. The positions of the visuals are all fixed and do not change with scrolling. We also included some interactivity with the visuals to allow users to quickly explore a few points within a complex manifold and see the impact of their proposed changes.  

The navigator is a shortcut function on the top left side of the page which allows users to quickly navigate to a section without being constrained by the flow of the scroller. We built the navigator based on feedback from our peers who wanted more flexibility in accessing a wide range of sections quickly. We learned that this tool helps users to revise and reinforce concepts by jumping between different sections instantaneously.  


## Development Process
This visualization tool was developed over the course of four weeks and the development process was very collaborative and iterative. After multiple meetings to brainstorm ideas, we decided to visualize a scientific paper because we wanted to alleviate a pain point where only a small niche of experts can comprehend the publication. We aimed to broaden the range of audience who can understand these materials through visualizations and we hope that the same framework can be used to visualize other complex research publications. 

After deciding on the scope of the project, the team met bi-weekly to propose and build candidate solutions, review progress, and divide up next steps. The process of working individually to develop ideas, then coming together to review and further brainstorm continued through the rest of the project as we incorporated feedback from classmates and developed the final version. In making decisions on what to include, we weighed the value to the reader of each visual or interactive aspect against the time expected to achieve that aspect. We are pleased with our final submission, which provides multiple opportunities for interaction and exploration of the primary publication.

In addition to attending meetings to compare work and brainstorm new ideas, each team member contributed in the following way: 
- Aik Jun (AJ) built the scrolling functionality which controls the flow of the stories and the animations that accompany the scroll.
- Franklin created all the interactivity that bolster the story telling and was in charge of component positioning and the aesthetics of the website. She also created all the videos for the project.
- Daniel generated all the images and graphs for the visualization. He was in charge of maintaining and updating the website along with the code base.
- All team members contributed to debugging the visualization and to the final write-up of the project. 

