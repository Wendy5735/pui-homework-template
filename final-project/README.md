# **FP4 \- Final Project Writeup**

## Part 1: Website Description

Describe your website (300 words).

The purpose of my website is to serve as a personal portfolio, showcasing my design projects, skills, and professional experiences in an interactive and visually compelling format. Beyond being a digital resume, the site is a storytelling platform that reflects my personality and technical expertise while leaving a lasting impression on its visitors.

The target audience for this website includes recruiters, hiring managers, and professionals in the fields of design and HCI, as well as potential collaborators and fellow designers.

My portfolio highlights a selection of my main projects with important details, visuals, and complete processes. The visuals and key ideas for each project are prominently displayed on the main page, while each project’s detail page delves deeper into its process, providing viewers with a clear understanding of my design approach. Additionally, the site includes my personal information and professional experiences, offering a comprehensive perspective on my role as a designer.

To engage the audience, the website features an animated gradient background project page as the home page to draw attention. It also incorporates various interactive elements and animations. For example, scroll-triggered animations and transitions enhance the storytelling experience, while cursor trails add a playful and engaging touch. These elements are carefully balanced to avoid overwhelming the user or distracting from the main content.

Overall, the website is designed to captivate and inform, presenting my work in a way that emphasizes both creativity and usability.

## Part 2: User Interaction

How a user would interact with your website? For each step, briefly but clearly state the interaction type & how we should reproduce it.

-  Responsive Website: (1) Any desktop screen size (such as 1440 x 900).
(2) Mobile screen size: 390 x 844.
1. Navigating Between Projects: Navigate between the main project page using the left, up, right, and down arrow keys, swiping (on touch devices), or by clicking the left and right arrows at the bottom-right corner of the page. Each navigation triggers transition animations, such as project title text appearing letter by letter and background gradients transitioning colors.
2. Trailing Cursor: Move the cursor around on the home page to see the trailing cursor effect following the cursor. The trail dynamically displays the categories of the project, such as "UI/UX Design," or "Print Design". 
3. Enter the Project Detail Page: Click the "VIEW" button on the home page for a specific project. It leads the user to a detailed page about the selected project. On this page, users can scroll through visuals, read detailed descriptions, and explore the design process.
4. Returning to the Home Page: Click the back arrow on the project detail page to return to the home page.  
5. Viewing the Profile Page: Click on "About" in the top-right navigation bar to access the profile page.
6. Exploring Detailed Experience on the Profile Page: Hover over different experiences in the "Experience" section to reveal a gray block with additional details about each experience
7. Viewing Project Cards on the Profile Page: Scroll down to see project cards fade in one by one. Hovering over a card brings it to the front, enlarges it, and subtly grays out the surrounding cards, creating a focus on the hovered card. Click on one card leads to its project detail page.


## Part 3: External Tool

Describe what important external tool you used (JavaScript library, Web API, animations, or other). Following the bulleted list format below, reply to each of the prompts.

1. GSAP 
   * Why did you choose to use it over other alternatives? (2 sentences max) -- I chose GSAP because of its powerful animation capabilities and ease of use compared to other libraries. 
   * How you used it? (2 sentences max) -- I used GSAP for scroll-triggered animations, project transitions, and interactive effects such as text reveals, image fade-ins, and cursor trails.
   * What does it add to your website? (2 sentences max) -- GSAP enhances my website's interactivity a lot by enabling fluid animations that improve user engagement. 

## Part 4: Design Iteration

Describe how you iterated on your prototypes, if at all, including any changes you made to your original design while you were implementing your website and the rationale for the changes. (4-8 sentences max)

I closely followed my initial design structure but focused my iterations primarily on enhancing accessibility and cohesion. During lab sessions, I received feedback on accessibility, such as making the gradient background lighter to improve the readability of black text, and increasing the font size. Based on this feedback, I adjusted the design to ensure better contrast and visibility across all sections of the site. Additionally, I iterated to make the website more cohesive by extending the gradient background to the profile page, unifying its visual language with the project pages. These iterations were driven by the goal of improving user experience while maintaining a consistent and engaging aesthetic throughout the site.

## Part 5: Implementation Challenge

What challenges did you experience in implementing your website? (2-4 sentences max)

One of the challenges was trying to use the GSAP library. The examples posted online were sometimes lengthy, complicated, and didn’t directly apply to my situation, so I had to adapt and simplify them to fit my specific use case.

## Part 6: Generative AI Use and Reflection

Describe how you used Generative AI tools to create this final project (fill in the following information, write \~500 words in total).

Document your use of all GenAI tools — ChatGPT, Copilot, Claude, Cursor, etc. using the template below. Add/Delete rows or bullet points if needed, and replace Tool1/Tool2 with the name of the tool.

### Usage Experiences by Project Aspects

Feel free to edit the column \_ (other?) or add more columns if there's any other aspect in your project you've used the GenAI tools for.

For the following aspects of your project, edit the corresponding table cell to answer:
- *Usage*: Whether you used / did not use this tool for the aspect. Enter [Yes/No]
- *Productivity*: Give a rating on whether this tool makes your productivity for X aspect [1-Much Reduced, 2-Reduced, 3-Slightly Reduced, 4-Not Reduced nor Improved, 5-Slightly Improved, 6-Improved, 7-Much Improved].

| Tool Name | Ratings | design | plan | write code | debug | \_ (other?) |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| ChatGPT | Usage | No | No | Yes | Yes | No |
| ChatGPT | Productivity | N/A | N/A | 6 | 6 | N/A |


### Usage Reflection

> Impact on your design and plan 
* It matched my expectations and plan in [FP2](#generative-ai-use-plan) in that it provided a lot of help in explaining library concepts and debugging. For example, 
  1. ChatGPT: ChatGPT matched my expectations and plan in FP2 in that it was very effective in providing coding assistance and debugging support. For example, when implementing GSAP animations, ChatGPT helped me better understand and simplify the examples I found online and adapt them to my specific use case. 


* It did not match my expectations and plan in [FP2](#generative-ai-use-plan) in that it was less effective in debugging. For example, 
  1. ChatGPT: It did not match my expectations and plan in FP2 in that it provided limited support for debugging due to the complexity of inputting large amounts of code and providing detailed context for each issue. As a result, I had to handle most debugging tasks myself.

* GenAI tool did influence my final implementation plan by making the process quicker, but it did not influence the design because I wanted to rely more on my own iteration and user feedback. For example, 
  1. ChatGPT: I think GenAI tools did influence my final design and implementation plan because they streamlined my coding and debugging process, allowing me to finish the things quicker than I thought, and focus more on refining the user experience and visual details. However, it did not directly shape the creative or strategic aspects of the design, as those relied more on user feedback and personal iteration.

> Use patterns
* I accepted the generations when they matched my design goals and provided efficient solutions to implementation challenges. For example, 
  1. ChatGPT: once suggested optimizing GSAP animations by grouping transitions into a single ScrollTrigger instance for better performance and smoother effects. I adjusted my design according to the suggestion because it reduced the complexity of managing multiple animation triggers while maintaining the desired visual flow.
* I critiqued/evaluated the generated suggestions by comparing them against my initial design vision, user experience priorities, and technical feasibility. For example, 
  1. ChatGPT once suggested using a  CSS grid layout to manage the placement of project cards. However, I modified/rejected the suggestion because it required more adjustments than using a simpler flexbox approach, which is something we have learned in class. 


> Pros and cons of using GenAI tools
* Pros
  1. ChatGPT: First, it is very efficient. ChatGPT helped streamline problem-solving, such as suggesting quick solutions for animation effects and layout adjustments, which saved significant time during implementation. Moreover, it explained complex JavaScript libraries like GSAP and provided clear examples, which enhanced my understanding and application of the tool.

* Cons
  1. ChatGPT: The tool sometimes required extensive context to provide accurate solutions, which made debugging lengthy or complex code challenging. Alo, suggestions occasionally included overly generalized or unsuitable examples, which required me to adapt or discard them for my project.


### Usage Log

Document the usage logs (prompts and chat history links) for the GenAI tools you used. Some tools may not have an easy way to share usage logs, just try your best! Some instructions for different tools:

1. ChatGPT prompts (not comprehensive)

"Right now, the blur effect just blurs, it did not blend with the next background. The transition between the previous and next background is still abrupt. I want the colors to blur and mix; how can I achieve that?"

"power3.out vs power2.out in gsap."

"How to let the effect to happen only if I swipe fast enough or long enough"

"How to make a card to come to the front (not stacked) when I hover on it and make the other cards grayed out."

"for the hovering and enlarge the card effect, why it only works if i add "!important"."

"For some reason, I cannot scroll this page. Is it because I put style.css and profile.css into this HTML, and in style.css it has overflow: hidden;?"

## Part 7: Appendix: Accessibility
### Home Project Page
![Home Page WAVE](Images/Home-WAVE.png)

### Project 1 Detail Page
![Project Detail 1 Page WAVE](Images/P1-WAVE.png)

### Project 2 Detail Page
![Project Detail 2 Page WAVE](Images/P2-WAVE.png)

### Project 3 Detail Page
![Project Detail 3 Page WAVE](Images/P3-WAVE.png)

### Profile Page
![Profile Page WAVE](Images/Profile-WAVE.png)

---

# **FP3 \- Final Project Check-in**

Document the changes and progress of your project. How have you followed or changed your implementation & GenAI use plan and why? Remember to commit your code to save your progress.

- I am following my plan very well and even ahead of my plan. The only main things left to do are some minor GSAP animations and the trailing cursor effect. I have been using GenAI scarcely for some questions regarding the GSAP library. 

## Implementation Plan Updates

- [X] Completed all HTML/css structure for all pages
- [X] Implemented gradient animation background
- [X] Implemented page transition using scrolling in GSAP
- [X] Connected each Project Page with their specific project detail page
- [X] Implement JS for all pages
- [ ] Use GSAP to add more animation
- [ ] Trailing Cursor

## Generative AI Use Plan Updates

- [X] Use GenAI for questions regarding the GSAP library
- [X] Use GenAI for some debugging questions


Remember to keep track of your prompts and usage for [FP4 writeup](#part-6-generative-ai-use-and-reflection).

---

# **FP2 \- Evaluation of the Final project**

## Project Description

My motivation for this project is to create a clear, engaging portfolio website that effectively showcases my design work and personal profile. This website will use a vertical scroll format. The goal is to offer potential collaborators and employers an easy and interesting way to explore my work and learn more about my background and skills.

## High-Fi Prototypes

### *Prototype 1*

![Project Page](Images/Prototype1.png)

The left image is the landing page, which showcases a brief of each project. The users interacts by scrolling on the trackpad, which switch to the next or previous project. The right image shows a project detail page, once the user clicks "read". 

User feedback: There is a lack of clear signifiers or affordances for exiting a project. Additionally, they expressed confusion about how to interact with the project pages, whether to use arrows, scroll, or another method to navigate through projects. 


### *Prototype 2*

![Profile Page](Images/Prototype2.png)

This prototype shows my profile page. It outlines my experiences and provides a place to look at all the projects I've done. 

User feedback: For the profile page, participants recommended adding more interactive elements to enhance engagement and make the content more dynamic. 

## Usability Test

I conducted my usability test with 2 participants, who were asked to perform tasks such as exploring projects, delving into a specific project, and finding my profile, while using a think-aloud approach to share their thoughts.

In summary, the feedback I received during the usability test highlighted a few key areas for improvement: the lack of affordances for exiting individual project pages, confusion over how to interact with the project pages, and the need for more interactive elements on the profile page. To address these points, I first added a "scroll" indicator on the side of the project pages to inform users that they can scroll to explore additional content. I also included a "back" icon on the project detail pages, making it clear how to exit a project and return to the main gallery.

For the profile page, I incorporated more interactive hover effects to make the experience more engaging. In the Experience section, for instance, hovering over each role reveals specific tasks, allowing users to discover detailed information intuitively. 


## Updated Designs

![Updated Design 1](Images/updatedDesign1.png)
![Updated Design 2](Images/updatedDesign2.png)

In the project page and project detail page, "scroll" indicator and "back" icon were added. In the profile page, two hovering effects were added: the hovering effect for Experience section reveals more information, and the hovering effect for Projects section allows one project card to come to the front while fading out other cards.


## Feedback Summary


The feedback I got from group evaluation are as below:
- the website jumps directly into the project section without a personal introduction, making it feel less welcoming?
- Add more personal elements (an introduction, more interaction, etc)
- Think about another way to layout the projects in profile page
- “Scroll” visual hint is hard to see
- In the profile page, grey and black interface doesn’t create a lot of contrast - maybe experiment with color shades like you have on project title page

To address these points, I might add an introductory section labeled "00/05" on the project page to offer visitors a quick overview of who I am. The feedback on revising the layout for the projects in the profile page may not significantly influence my design, as I’m interested in experimenting with stacking cards. However, I plan to increase the spacing to reveal more of each card. I will also refine the scroll visual hint to make it more prominent, ensuring users recognize how to navigate. Lastly, I may incorporate a gradient effect into the profile page to create a more cohesive look.

## Milestones

Outline weekly milestones to plan your expected implementation progress until the end of the semester (\~300 words). 

### *Implementation Plan*

- [X] Week 9 Oct 28 \- Nov 1:
  - [X] FP1 due
  - [X] Finish FP2 Writeup
  
- [ ] Week 10 Nov 4 \- Nov 8:   
  - [ ] FP2 due
  - [ ] Basic HTML/css structure for the Project Page
  - [ ] Implement gradient animation background
  - [ ] Explore page transition using scrolling

- [ ] Week 11 Nov 11 \- Nov 15: 
  - [ ] Implement HTML/css for all pages (project detail pages + profile page)
  - [ ] Connect each Project Page with their specific project detail page
  - [ ] FP3 check-in
- [ ] Week 12 Nov 18 \- Nov 22:   
  - [ ] Implement JS for all pages
- [ ] Week 13 Nov 25 \- Nov 29: 
  - [ ] Use GSAP to add animation
  - [ ] Thanksgiving  
- [ ] Week 14 Dec 2 \- Dec 6:  
  - [ ] FP4 due 

### *Libraries and Other Components*

List the JS libraries and other components (if applicable) that you plan to use. 
* GSAP
* Motion One
* An animated gradient background library


## Generative AI Use Plan

Outline how you plan to use Generative AI tools to aid in the implementation (\~300 words).

### *Tool Use*

 What would you use? Edit the list given your plan. For each tool, explain briefly on what do you expect Generative AI to help you with and what might it not be able to help you with.

* ChatGPT  
  * I plan to use ChatGPT to help troubleshoot JavaScript issues, help in my debugging process, and explain unfamiliar concepts or libraries. ChatGPT’s ability to quickly generate, modify, and explain code snippets can save me time, especially during debugging or when exploring complex design approaches. 
  * I will not rely on ChatGPT for general coding; I will do all coding manually because this approach allows me to build a deeper understanding of the code and strengthens my skills. Coding manually also allows me to better understand potential issues and how to troubleshoot them, as I am directly engaged with every line of code. So I will avoid relying on it for direct code generation and copy pasting.
* GitHub Copilot  
  * I will not use GitHub Copilot because I don't have it.

### *Responsible Use*

How would you use Generative AI responsibly? 

To use Generative AI responsibly, I will verify and understand all generated code, making sure that it functions as expected and meets my project’s specific requirements. I’ll check AI-generated content very carefully, fact-checking any explanations or suggestions it provides to avoid misinformation. I’ll use these tools as assistants rather than as sole sources of truth. Additionally, I’ll document any places where I use Generative AI in my code comments.

---


# FP1 - Proposal for Critique

## Idea 1
![Alt text](<Images/IMG_0457 2.jpg>)

The idea was to create a personal website to showcase my experiences, skills, and projects. It will be an interactive portfolio that presents my work in a clean and intuitive vertical scroll format. 

Design: The page starts with a bio and my image, then moves on to my experiences. Lastly, the projects will be displayed as a stack of cards. The users can click to enter the specific project page.

Motivation: This portfolio aims to provide potential employers or collaborators with a quick, accessible way to understand my experience and skillsets. The simplicity of a vertical scroll format allows visitors to explore my work intuitively and without distractions.

Interactivity and Engagement: To make the design engaging, I plan to use subtle animations and transitions to guide the user’s attention. For instance, when scrolling, project descriptions and visuals will smoothly animate into view. I also plan to use many hover effects. The library I will look into for this idea are GSAP and Motion One. 

Accessibility: I will ensure accessibility by adhering to WCAG guidelines, focusing on contrast and readable font sizes. 

Information to Convey: The website will include a biography, my experiences, my design projects, contact information.

Design Concerns:
How can I add engaging interactivity to a basic personal website?

## Idea 2 
![Alt text](Images/IMG_0459.jpg)

This portfolio will showcase my design work in a horizontal scrolling format, simulating a digital gallery experience.

Motivation: The motivation behind this design is to create a unique, immersive browsing experience that sets my portfolio apart from typical vertical scroll websites. This layout better showcases visual-heavy projects and invites the user to explore the portfolio as they would in a real-world gallery.

Interactivity and Engagement: To enhance interactivity, the site will feature parallax scrolling, where background elements move at different speeds, creating depth. Projects will be represented as "cards," with each card expanding to full-screen mode upon click to reveal more details and interactive content. I will also add hover effects and smooth transitions.

Accessibility: I’ll make this design accessible by providing signals on how to scroll. I need to consider how to make this compatible on mobile experience. 

Information to Convey: This portfolio will include an introductory section about me, followed by a gallery of design projects. 

Design Concerns:
- How can I ensure that users understand the horizontal scroll mechanic intuitively?
- How can I optimize the horizontal scrolling mechanism for both desktop and mobile users, ensuring a smooth experience across devices and screen sizes?

## Idea 3
![Alt text](Images/IMG_0458.jpg)

Basic Idea: FigmaStart is an interactive tool designed to teach beginners how to use some key features of Figma. 

Motivation: The motivation behind this tool is to create a more practical and engaging learning experience compared to Figma’s official resources, which can feel overwhelming for beginners.

Interactivity and Engagement: The tool will feature many animations that use GSAP and Motion One.

Accessibility: I will ensure accessibility by adhering to WCAG guidelines, focusing on contrast and readable font sizes. 

Information to Convey: FigmaStart will focus on teaching the core features of Figma, targeting beginners. 

Design Concerns: 
- How can I present key information in a clearer and more interactive way than Figma official resources page?
- How should I integrate visual aids, animations, or interactive elements to help users retain information effectively?

## Critiques Received
During the lab session, several important critiques were raised that will help refine the direction of my project. A key point was to consider the scope of my project and whether it is feasible given the limited time frame. I leanred that there is the need to define a Minimum Viable Product (MVP). It was suggested that I prioritize necessary features over “nice to have” features to ensure I accomplish a fully functional and polished outcome within the deadline.

Accessibility was another major theme. I was reminded to ensure my designs are accessible to a wide audience, paying attention to design elements such as color contrast, readability, and support for screen readers or keyboard navigation. 
I also received feedback on adding clear signifiers for the scrolling mechanism (especially horizontal scrolling), in order to ensure users intuitively understand how to navigate the site without confusion.

One suggestion was to check out Camille Mormal’s website as a reference for horizontally scrolling website. 

Regarding the portfolio structure, there was feedback around determining whether my projects should be placed in a horizontal or vertical scroll format depending on their content. Some projects might naturally lend themselves to one format over the other based on their visual and narrative flow.

Another feedback was to clarify whether my FigmaStart tool should target beginners or advanced users. This is crucial, as it will dictate the complexity of features I plan to include in the tool. Defining the target audience clearly will also help the users in understanding this website.

Finally, I received more creative ideas, such as placing projects in an infinite space where users could navigate in any direction, not only just horizontally or just vertically. 

## Reflection
Based on the feedback I received during the lab session, I’ve decided to move forward with the first idea: a personal website in a vertical scroll format. This idea is not only something I’m passionate about, but it also has an approachable scope that I can realistically complete in the two-month timeframe. Additionally, the general consensus from the feedback was that this option works best in terms of clarity and usability.

One critique I will act on is the suggestion to focus on creating a MVP. By narrowing down my priorities to the essential features, I can ensure that the website is functional by the deadline. For the next step, I will plan out the MVP I want my basic website to have. 

I will also incorporate the feedback around accessibility and affordance/signifiers for the scrolling mechanism. Since this design follows a simple vertical scroll, I will need to make sure it is not too basic by adding interactive elements that guide the user without overwhelming them. To address accessibility, I will ensure proper contrast, readable fonts, and make the site easily navigable with a keyboard or screen reader. 

However, I will not pursue more complex ideas like the infinite space navigation or horizontal scrolling at this stage. While these ideas are creative and intriguing, they are not really in the approachable scope I want to maintain for this project. Additionally, I think that a vertical scroll is more suitable for presenting my projects clearly and effectively for future usages.

Finally, I will make decisions about the content I want to include, focusing on key projects that best showcase my design process and skills, and avoid overloading the portfolio with excessive details.