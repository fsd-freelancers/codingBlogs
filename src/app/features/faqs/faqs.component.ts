import { Component } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent {

  public faqs = [
    { que: "What is the importance of coding blogs for developers?", ans: "Coding blogs are crucial for developers as they serve as valuable resources for learning new technologies, understanding best practices, and staying updated with the latest trends in the industry. They also facilitate knowledge sharing and community building among developers." },
    { que: "How can I start my own coding blog?", ans: "Starting a coding blog involves selecting a platform (like WordPress, Medium, or self-hosted solutions), choosing a niche or topic, creating valuable content, optimizing for SEO, and engaging with the audience through comments and social media." },
    { que: "What type of content should I publish on a coding blog?", ans: "Content should cater to your target audience's needs, such as tutorials, coding challenges, best practices, project walkthroughs, technology reviews, and industry updates. Visual aids like screenshots, diagrams, and code snippets enhance the readability of the content." },
    { que: "How can I increase the visibility of my coding blog?", ans: "Utilize SEO techniques by optimizing keywords, creating high-quality and shareable content, guest posting on other coding blogs, engaging with the developer community on social media, and leveraging email newsletters to reach a wider audience." },
    { que: "How frequently should I post on my coding blog?", ans: "Consistency matters more than frequency. Aim for a regular posting schedule that you can maintain, whether it's weekly, bi-weekly, or monthly. Quality content that adds value to your audience is key." },
    { que: "How can I engage and interact with my coding blog audience?", ans: "Encourage comments on your posts, respond to comments promptly, ask for feedback, conduct polls or surveys, host live Q&A sessions, and create forums or communities where readers can interact with each other." },
    { que: "How can I measure the success of my coding blog?", ans: "Track metrics like website traffic, user engagement (comments, shares, time spent on page), subscriber count, conversion rates (if selling products/services), and monitor the growth of your blog's authority in the coding community through backlinks and mentions." },
  ];

  public selectedQuestionIndex: number = -1;

  public onQue(index) {
    if (this.selectedQuestionIndex === index) {
      this.selectedQuestionIndex = -1;
    } else {
      this.selectedQuestionIndex = index;
    }
  }

}
