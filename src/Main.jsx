import React, { useState } from 'react';
import parse from 'xml-parser';


const xml = `<?xml version="1.0" encoding="UTF-8"?>
<blog>
<posts>
<post id="1">
  <title>How to Build Your Own Gaming PC</title>
  <date>April 25, 2023</date>
  <author>John Doe</author>
  <summary>If you're a gamer and you're looking to build your own PC, this guide will take you through the steps to build a powerful gaming rig that will handle even the most demanding games.</summary>
  <image>https://www.intel.com/content/dam/www/central-libraries/us/en/images/2023-01/s9-u05-39-detail-shot-gaming-pc-original-rwd.jpg.rendition.intel.web.1648.927.jpg</image>
  <body>
    Are you ready to build your own gaming PC? It can be a daunting task, but fear not – we've got you covered. In this comprehensive guide, we will take you through every step of the process, from selecting the right components to assembling your rig and optimizing it for peak performance. 
    First, let's talk about the essential components you'll need. Your gaming PC will consist of a CPU, motherboard, RAM, storage, graphics card, power supply, and a case to house everything. There are many options for each of these components, so it's important to do your research and choose the ones that best fit your budget and performance needs.
    Once you have your components, it's time to start assembling your gaming PC. Start by installing the CPU onto the motherboard, followed by the RAM and storage. Then, mount your motherboard into the case and connect all the necessary cables. Next, install your graphics card and power supply. Finally, add any additional components like fans or liquid cooling systems.
    But building your gaming PC is just the beginning – now it's time to optimize your system for the best performance. Start by updating your drivers and installing the latest software. You can also overclock your CPU and graphics card to get more power out of your system. And don't forget to regularly clean and maintain your PC to keep it running smoothly.
    Building your own gaming PC is a rewarding experience that can save you money and give you a system tailored to your specific needs. With this guide, you have all the information you need to build a powerful gaming rig that can handle any game you throw at it. So what are you waiting for? Start building your dream PC today!
  </body>
    
</post>
    <post id="2">
      <title>5 Best Places to Travel This Summer</title>
      <date>April 2, 2023 </date>
      <author>Jane Smith</author>
      <summary>Are you planning a summer vacation? Check out our list of the 5 best places to travel this summer and start planning your next adventure today!</summary>
      <image>https://www.travelandleisure.com/thmb/t2Lz-FmZYay2AUaRYrAWHC_0Vyk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/alaska-dalton-highway-ice-road-GOWHERE221121-ac434ce7b7d84970ad9f4fd11b7ba63d.jpg</image>
      <body>Summer is a wonderful time to travel and experience new cultures, cuisines, and sights. The season offers a perfect opportunity to escape from the monotony of daily life and explore the world. Whether you prefer relaxing beach vacations or exciting outdoor adventures, there is always a destination that caters to your preferences.

      Some of the popular summer travel options include visiting tropical destinations, exploring historical sites and landmarks, indulging in adventure sports, experiencing cultural festivals and events, or simply lounging in luxurious resorts. No matter what type of traveler you are, there is something for everyone to enjoy during the summer months.
      
      One of the best things about summer travel is the opportunity to connect with nature. From hiking and camping in the mountains to relaxing on the beach and swimming in the sea, summer travel provides plenty of opportunities to get outside and enjoy the natural world. Summer also offers a chance to try new activities and adventures, such as kayaking, surfing, or even skydiving.
      
      In addition to outdoor adventures, summer is also a great time to immerse yourself in local cultures and traditions. Many destinations offer unique festivals and events during the summer months, providing an opportunity to experience the local customs and way of life. From music and dance festivals to food and wine festivals, there is always something happening during the summer months.</body>
    </post>
    <post id="3">
      <title>How to Improve Your Mental Health</title>
      <date>April 10, 2023 </date>
      <author>Bob Johnson</author>
      <summary>Mental health is an important aspect of overall wellness. In this article, we will explore some tips and strategies for improving your mental health.</summary>
      <image>https://sageclinic.org/wp-content/uploads/2021/11/Sage-Clinic_Negative-Thought_Young-depressed-male.jpg</image>
      <body>Our mental health is a crucial aspect of our overall well-being. It is not just a matter of being happy or sad, but it is about being able to manage our emotions, cope with stress, and lead a fulfilling life. Just like how we take care of our physical health by exercising and eating well, we also need to pay attention to our mental health.

      There are many things we can do to improve our mental health. One of the most effective ways is to practice mindfulness. Mindfulness is the practice of being present in the moment and focusing on your thoughts and feelings without judgment. It can help you develop a better understanding of your own mind and body and increase your self-awareness. This, in turn, can help you manage stress, reduce anxiety and depression, and improve your overall well-being.
      
      Another way to improve your mental health is to get enough sleep. Sleep plays a vital role in our mental and physical health, and lack of sleep can lead to a range of problems, including anxiety, depression, and decreased cognitive function. Aim to get seven to nine hours of sleep every night, and try to establish a regular sleep routine to help you fall asleep more easily and wake up feeling refreshed.
      
       </body>
    </post>
  </posts>
</blog>`;

const posts = parse(xml).root.children[0].children;

const Main = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostClick = (postId) => {
    const selected = posts.find((post) => post.attributes.id === postId);
    setSelectedPost(selected);
  };

  return (
    <main>
      {selectedPost ? (
        <article key={selectedPost.attributes.id}>
          <h1>{selectedPost.children.find((el) => el.name === 'title').content}</h1>
          <p>
            <span className="date">
              {selectedPost.children.find((el) => el.name === 'date').content}
            </span>
            <span className="author">
              {selectedPost.children.find((el) => el.name === 'author').content}
            </span>
          </p>
          <div className="summary">
            <img
              src={selectedPost.children.find((el) => el.name === 'image').content}
              alt={selectedPost.children.find((el) => el.name === 'title').content}
            />
            <p>{selectedPost.children.find((el) => el.name === 'body').content}</p>
          </div>
          
        </article>
      ) : (
        posts.map((post) => (
          <article key={post.attributes.id}>
            <h1>
              <a href="#" onClick={() => handlePostClick(post.attributes.id)}>
                {post.children.find((el) => el.name === 'title').content}
              </a>
            </h1>
            <p>
              <span className="date">
                {post.children.find((el) => el.name === 'date').content}
              </span>
              <span className="author">
                {post.children.find((el) => el.name === 'author').content}
              </span>
            </p>
            <div className="summary">
              <img
                src={post.children.find((el) => el.name === 'image').content}
                alt={post.children.find((el) => el.name === 'title').content}
              />
              <p>{post.children.find((el) => el.name === 'summary').content}</p>
            </div>
          </article>
        ))
      )}
    </main>
  );
};

export default Main;
