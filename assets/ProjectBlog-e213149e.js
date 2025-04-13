import{a as x,u as B,j as e}from"./index-c210c587.js";import N from"./Navbar-ddfb77ce.js";import E from"./Footer-f2c5fa26.js";const C=c=>new Date(c).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}),I={project1:{id:"project1",title:"Building a Real-time Chat Application",description:"A deep dive into creating a modern chat application using React and WebSocket",content:`## Introduction
In this project, I built a real-time chat application using React for the frontend and WebSocket for real-time communication. The application features instant messaging, user presence, and message history.

Here's how the application looks:

[image:chat-interface]

## Technical Stack
- React.js for the frontend interface
- WebSocket for real-time communication
- Node.js for the backend server
- MongoDB for message storage and user data

Here's a quick demo of the real-time messaging:

[video:chat-demo]

## Architecture Overview

Let's look at our technology stack and their respective roles:

[table:tech-stack]

## Key Features
1. Real-time messaging with instant updates
2. User presence indicators (online/offline status)
3. Message history with infinite scroll
4. File sharing capabilities
5. Emoji support and reactions
6. Read receipts
7. Typing indicators

## Implementation Details

Here's how we handle WebSocket connections:

[code:websocket-handler]

The application architecture is built around three main components...`,date:"2024-06-20",tags:["React","WebSocket","Node.js","MongoDB"],media:{images:[{url:"https://example.com/chat-interface.png",caption:"Chat application interface showing real-time messaging"}],videos:[{url:"https://example.com/chat-demo.mp4",caption:"Demo of real-time messaging between two users"}],codeBlocks:[{code:`const wsHandler = new WebSocket(WS_URL);

wsHandler.onmessage = (event) => {
  const message = JSON.parse(event.data);
  switch (message.type) {
    case 'NEW_MESSAGE':
      handleNewMessage(message);
      break;
    case 'USER_PRESENCE':
      updateUserStatus(message);
      break;
    default:
      console.log('Unknown message type:', message.type);
  }
};`,language:"typescript",caption:"WebSocket message handler implementation"}],tables:[{data:[["Technology","Role","Key Features"],["React.js","Frontend Framework","Component-based UI, State Management, Virtual DOM"],["WebSocket","Real-time Communication","Bi-directional data flow, Low latency, Event-driven"],["Node.js","Backend Server","Event Loop, Non-blocking I/O, Express.js"],["MongoDB","Database","Document Store, Scalability, Real-time Updates"]],caption:"Technology Stack Overview"}]}},project2:{id:"project2",title:"Building a Real-time Chat Application",description:"A deep dive into creating a modern chat application using React and WebSocket",content:`## Introduction
In this project, I built a real-time chat application using React for the frontend and WebSocket for real-time communication. The application features instant messaging, user presence, and message history.

Here's how the application looks:

[image:chat-interface]

## Technical Stack
- React.js for the frontend interface
- WebSocket for real-time communication
- Node.js for the backend server
- MongoDB for message storage and user data

Here's a quick demo of the real-time messaging:

[video:chat-demo]

## Architecture Overview

Let's look at our technology stack and their respective roles:

[table:tech-stack]

## Key Features
1. Real-time messaging with instant updates
2. User presence indicators (online/offline status)
3. Message history with infinite scroll
4. File sharing capabilities
5. Emoji support and reactions
6. Read receipts
7. Typing indicators

## Implementation Details

Here's how we handle WebSocket connections:

[code:websocket-handler]

The application architecture is built around three main components...`,date:"2024-06-20",tags:["React","WebSocket","Node.js","MongoDB"],media:{images:[{url:"https://example.com/chat-interface.png",caption:"Chat application interface showing real-time messaging"}],videos:[{url:"https://example.com/chat-demo.mp4",caption:"Demo of real-time messaging between two users"}],codeBlocks:[{code:`const wsHandler = new WebSocket(WS_URL);

wsHandler.onmessage = (event) => {
  const message = JSON.parse(event.data);
  switch (message.type) {
    case 'NEW_MESSAGE':
      handleNewMessage(message);
      break;
    case 'USER_PRESENCE':
      updateUserStatus(message);
      break;
    default:
      console.log('Unknown message type:', message.type);
  }
};`,language:"typescript",caption:"WebSocket message handler implementation"}],tables:[{data:[["Technology","Role","Key Features"],["React.js","Frontend Framework","Component-based UI, State Management, Virtual DOM"],["WebSocket","Real-time Communication","Bi-directional data flow, Low latency, Event-driven"],["Node.js","Backend Server","Event Loop, Non-blocking I/O, Express.js"],["MongoDB","Database","Document Store, Scalability, Real-time Updates"]],caption:"Technology Stack Overview"}]}},project3:{id:"project3",title:"Building a Real-time Chat Application",description:"A deep dive into creating a modern chat application using React and WebSocket",content:`## Introduction
In this project, I built a real-time chat application using React for the frontend and WebSocket for real-time communication. The application features instant messaging, user presence, and message history.

Here's how the application looks:

[image:chat-interface]

## Technical Stack
- React.js for the frontend interface
- WebSocket for real-time communication
- Node.js for the backend server
- MongoDB for message storage and user data

Here's a quick demo of the real-time messaging:

[video:chat-demo]

## Architecture Overview

Let's look at our technology stack and their respective roles:

[table:tech-stack]

## Key Features
1. Real-time messaging with instant updates
2. User presence indicators (online/offline status)
3. Message history with infinite scroll
4. File sharing capabilities
5. Emoji support and reactions
6. Read receipts
7. Typing indicators

## Implementation Details

Here's how we handle WebSocket connections:

[code:websocket-handler]

The application architecture is built around three main components...`,date:"2024-06-20",tags:["React","WebSocket","Node.js","MongoDB"],media:{images:[{url:"https://example.com/chat-interface.png",caption:"Chat application interface showing real-time messaging"}],videos:[{url:"https://example.com/chat-demo.mp4",caption:"Demo of real-time messaging between two users"}],codeBlocks:[{code:`const wsHandler = new WebSocket(WS_URL);

wsHandler.onmessage = (event) => {
  const message = JSON.parse(event.data);
  switch (message.type) {
    case 'NEW_MESSAGE':
      handleNewMessage(message);
      break;
    case 'USER_PRESENCE':
      updateUserStatus(message);
      break;
    default:
      console.log('Unknown message type:', message.type);
  }
};`,language:"typescript",caption:"WebSocket message handler implementation"}],tables:[{data:[["Technology","Role","Key Features"],["React.js","Frontend Framework","Component-based UI, State Management, Virtual DOM"],["WebSocket","Real-time Communication","Bi-directional data flow, Low latency, Event-driven"],["Node.js","Backend Server","Event Loop, Non-blocking I/O, Express.js"],["MongoDB","Database","Document Store, Scalability, Real-time Updates"]],caption:"Technology Stack Overview"}]}},project4:{id:"project4",title:"Car Accident Detector & Recorder",description:"A Car Accident Detector & Alert System using BlackBox Technology",content:`##  Introduction
Car accidents are a major cause of fatalities worldwide. The **Car Accident Detector & Recorder** is an **IoT-based smart system** designed to detect car accidents, record crucial data, and send instant alerts to emergency contacts. This system helps in **saving lives** by providing **real-time location tracking**, accident data storage, and **immediate alerts** for critical incidents such as fire, vibration, and alcohol detection.

## Project Overview
This system utilizes multiple sensors, a microcontroller (ESP8266 NodeMCU), and GSM/GPS communication to detect accidents and alert emergency contacts. The collected data is also stored for future analysis.

##  Features
  -  **Real-time Accident Detection** using vibration, gyroscope, and temperature sensors.
  -  **GPS & GSM Integration** for sending instant location alerts via SMS.
  -  **IoT-based Remote Monitoring** using **Blynk** for live status tracking.
  -  **Fire & Alcohol Detection** to identify hazardous situations.
  -  **Accident Data Storage** for investigation and analytics.
  -  **Live Data Monitoring** via mobile app.

##  System Architecture
### Components Used:
### Microcontroller: 
- NodeMCU ESP8266
### Sensors:
- Temperature Sensor (Fire Detection)
- Vibration Sensor (Impact Detection)
- Alcohol Sensor (Drunk Driving Detection)
- Gyroscope Sensor (Vehicle Tilt Detection)
### Communication Modules:
- GPS Module (Location Tracking)
- GSM Module (SMS Alerts)
### Storage: 
- SD Card Module
### Software & Cloud Services:
- Blynk IoT Platform
- Arduino IDE for Programming



##  How It Works
 1. **Accident Detection**: When an impact is detected, data is recorded.
 2. **Data Logging**: Sensor readings are stored on the SD card.
 3. **Emergency Alert**: SMS with **GPS Location** is sent via the GSM module.
 4. **Remote Monitoring**: Live data is accessible through the **Blynk IoT App**.`,date:"2024-06-20",tags:["React","WebSocket","Node.js","MongoDB"],media:{images:[{url:"https://example.com/chat-interface.png",caption:"Chat application interface showing real-time messaging"}],videos:[{url:"https://example.com/chat-demo.mp4",caption:"Demo of real-time messaging between two users"}],codeBlocks:[{code:`const wsHandler = new WebSocket(WS_URL);

wsHandler.onmessage = (event) => {
  const message = JSON.parse(event.data);
  switch (message.type) {
    case 'NEW_MESSAGE':
      handleNewMessage(message);
      break;
    case 'USER_PRESENCE':
      updateUserStatus(message);
      break;
    default:
      console.log('Unknown message type:', message.type);
  }
};`,language:"typescript",caption:"WebSocket message handler implementation"}],tables:[{data:[["Technology","Role","Key Features"],["React.js","Frontend Framework","Component-based UI, State Management, Virtual DOM"],["WebSocket","Real-time Communication","Bi-directional data flow, Low latency, Event-driven"],["Node.js","Backend Server","Event Loop, Non-blocking I/O, Express.js"],["MongoDB","Database","Document Store, Scalability, Real-time Updates"]],caption:"Technology Stack Overview"}]}},project5:{id:"project5",title:"Building a Real-time Chat Application",description:"A deep dive into creating a modern chat application using React and WebSocket",content:`## Introduction
In this project, I built a real-time chat application using React for the frontend and WebSocket for real-time communication. The application features instant messaging, user presence, and message history.

Here's how the application looks:

[image:chat-interface]

## Technical Stack
- React.js for the frontend interface
- WebSocket for real-time communication
- Node.js for the backend server
- MongoDB for message storage and user data

Here's a quick demo of the real-time messaging:

[video:chat-demo]

## Architecture Overview

Let's look at our technology stack and their respective roles:

[table:tech-stack]

## Key Features
1. Real-time messaging with instant updates
2. User presence indicators (online/offline status)
3. Message history with infinite scroll
4. File sharing capabilities
5. Emoji support and reactions
6. Read receipts
7. Typing indicators

## Implementation Details

Here's how we handle WebSocket connections:

[code:websocket-handler]

The application architecture is built around three main components...`,date:"2024-06-20",tags:["React","WebSocket","Node.js","MongoDB"],media:{images:[{url:"https://example.com/chat-interface.png",caption:"Chat application interface showing real-time messaging"}],videos:[{url:"https://example.com/chat-demo.mp4",caption:"Demo of real-time messaging between two users"}],codeBlocks:[{code:`const wsHandler = new WebSocket(WS_URL);

wsHandler.onmessage = (event) => {
  const message = JSON.parse(event.data);
  switch (message.type) {
    case 'NEW_MESSAGE':
      handleNewMessage(message);
      break;
    case 'USER_PRESENCE':
      updateUserStatus(message);
      break;
    default:
      console.log('Unknown message type:', message.type);
  }
};`,language:"typescript",caption:"WebSocket message handler implementation"}],tables:[{data:[["Technology","Role","Key Features"],["React.js","Frontend Framework","Component-based UI, State Management, Virtual DOM"],["WebSocket","Real-time Communication","Bi-directional data flow, Low latency, Event-driven"],["Node.js","Backend Server","Event Loop, Non-blocking I/O, Express.js"],["MongoDB","Database","Document Store, Scalability, Real-time Updates"]],caption:"Technology Stack Overview"}]}},project6:{id:"project6",title:"Building a Real-time Chat Application",description:"A deep dive into creating a modern chat application using React and WebSocket",content:`## Introduction
In this project, I built a real-time chat application using React for the frontend and WebSocket for real-time communication. The application features instant messaging, user presence, and message history.

Here's how the application looks:

[image:chat-interface]

## Technical Stack
- React.js for the frontend interface
- WebSocket for real-time communication
- Node.js for the backend server
- MongoDB for message storage and user data

Here's a quick demo of the real-time messaging:

[video:chat-demo]

## Architecture Overview

Let's look at our technology stack and their respective roles:

[table:tech-stack]

## Key Features
1. Real-time messaging with instant updates
2. User presence indicators (online/offline status)
3. Message history with infinite scroll
4. File sharing capabilities
5. Emoji support and reactions
6. Read receipts
7. Typing indicators

## Implementation Details

Here's how we handle WebSocket connections:

[code:websocket-handler]

The application architecture is built around three main components...`,date:"2024-06-20",tags:["React","WebSocket","Node.js","MongoDB"],media:{images:[{url:"https://example.com/chat-interface.png",caption:"Chat application interface showing real-time messaging"}],videos:[{url:"https://example.com/chat-demo.mp4",caption:"Demo of real-time messaging between two users"}],codeBlocks:[{code:`const wsHandler = new WebSocket(WS_URL);

wsHandler.onmessage = (event) => {
  const message = JSON.parse(event.data);
  switch (message.type) {
    case 'NEW_MESSAGE':
      handleNewMessage(message);
      break;
    case 'USER_PRESENCE':
      updateUserStatus(message);
      break;
    default:
      console.log('Unknown message type:', message.type);
  }
};`,language:"typescript",caption:"WebSocket message handler implementation"}],tables:[{data:[["Technology","Role","Key Features"],["React.js","Frontend Framework","Component-based UI, State Management, Virtual DOM"],["WebSocket","Real-time Communication","Bi-directional data flow, Low latency, Event-driven"],["Node.js","Backend Server","Event Loop, Non-blocking I/O, Express.js"],["MongoDB","Database","Document Store, Scalability, Real-time Updates"]],caption:"Technology Stack Overview"}]}},project7:{id:"project7",title:"Building a Real-time Chat Application",description:"A deep dive into creating a modern chat application using React and WebSocket",content:`## Introduction
In this project, I built a real-time chat application using React for the frontend and WebSocket for real-time communication. The application features instant messaging, user presence, and message history.

Here's how the application looks:

[image:chat-interface]

## Technical Stack
- React.js for the frontend interface
- WebSocket for real-time communication
- Node.js for the backend server
- MongoDB for message storage and user data

Here's a quick demo of the real-time messaging:

[video:chat-demo]

## Architecture Overview

Let's look at our technology stack and their respective roles:

[table:tech-stack]

## Key Features
1. Real-time messaging with instant updates
2. User presence indicators (online/offline status)
3. Message history with infinite scroll
4. File sharing capabilities
5. Emoji support and reactions
6. Read receipts
7. Typing indicators

## Implementation Details

Here's how we handle WebSocket connections:

[code:websocket-handler]

The application architecture is built around three main components...`,date:"2024-06-20",tags:["React","WebSocket","Node.js","MongoDB"],media:{images:[{url:"https://example.com/chat-interface.png",caption:"Chat application interface showing real-time messaging"}],videos:[{url:"https://example.com/chat-demo.mp4",caption:"Demo of real-time messaging between two users"}],codeBlocks:[{code:`const wsHandler = new WebSocket(WS_URL);

wsHandler.onmessage = (event) => {
  const message = JSON.parse(event.data);
  switch (message.type) {
    case 'NEW_MESSAGE':
      handleNewMessage(message);
      break;
    case 'USER_PRESENCE':
      updateUserStatus(message);
      break;
    default:
      console.log('Unknown message type:', message.type);
  }
};`,language:"typescript",caption:"WebSocket message handler implementation"}],tables:[{data:[["Technology","Role","Key Features"],["React.js","Frontend Framework","Component-based UI, State Management, Virtual DOM"],["WebSocket","Real-time Communication","Bi-directional data flow, Low latency, Event-driven"],["Node.js","Backend Server","Event Loop, Non-blocking I/O, Express.js"],["MongoDB","Database","Document Store, Scalability, Real-time Updates"]],caption:"Technology Stack Overview"}]}}},A=()=>{const{projectId:c}=x(),d=B(),n=c?I[c]:null;if(!n)return e.jsxs(e.Fragment,{children:[e.jsx(N,{}),e.jsx("div",{className:"blog-error",children:"Blog post not found"}),e.jsx(E,{})]});const D=r=>n.media?r.split(`
`).map((a,i)=>{var p,g,h,u,b,k,S,f,w,v,y,j,R;if(a.startsWith("[image:")){const s=((p=a.match(/\[image:(.*?)\]/))==null?void 0:p[1])||"",t=(h=(g=n.media)==null?void 0:g.images)==null?void 0:h.find(o=>o.url.toLowerCase().includes(s.toLowerCase()));if(t)return e.jsxs("div",{className:"blog-media-container",children:[e.jsx("img",{src:t.url,alt:t.caption,className:"blog-image"}),e.jsx("p",{className:"blog-media-caption",children:t.caption})]},i)}if(a.startsWith("[video:")){const s=((u=a.match(/\[video:(.*?)\]/))==null?void 0:u[1])||"",t=(k=(b=n.media)==null?void 0:b.videos)==null?void 0:k.find(o=>o.url.toLowerCase().includes(s.toLowerCase()));if(t)return e.jsxs("div",{className:"blog-media-container",children:[e.jsxs("video",{controls:!0,className:"blog-video",children:[e.jsx("source",{src:t.url,type:"video/mp4"}),"Your browser does not support the video tag."]}),e.jsx("p",{className:"blog-media-caption",children:t.caption})]},i)}if(a.startsWith("[code:")){const s=((S=a.match(/\[code:(.*?)\]/))==null?void 0:S[1])||"",t=(w=(f=n.media)==null?void 0:f.codeBlocks)==null?void 0:w.find(o=>o.caption.toLowerCase().includes(s.toLowerCase())||s.toLowerCase()==="websocket-handler");if(t)return e.jsxs("div",{className:"blog-media-container",children:[e.jsx("div",{className:"blog-code-language",children:t.language}),e.jsx("pre",{className:"blog-code",children:e.jsx("code",{className:`language-${t.language}`,children:t.code.trim()})})]},i)}if(a.startsWith("[table:")){const s=((v=a.match(/\[table:(.*?)\]/))==null?void 0:v[1])||"",t=(j=(y=n.media)==null?void 0:y.tables)==null?void 0:j.find(o=>o.caption.toLowerCase().includes(s.toLowerCase())||s.toLowerCase()==="tech-stack");if(t)return e.jsx("div",{className:"blog-media-container",children:e.jsxs("table",{className:"blog-table",children:[e.jsx("thead",{children:e.jsx("tr",{children:t.data[0].map((o,l)=>e.jsx("th",{children:o},l))})}),e.jsx("tbody",{children:t.data.slice(1).map((o,l)=>e.jsx("tr",{children:o.map((M,W)=>e.jsx("td",{children:M},W))},l))})]})},i)}if(a.startsWith("#")){const s=((R=a.match(/^#+/))==null?void 0:R[0].length)||1,t=a.replace(/^#+\s/,""),o=`h${s}`;return e.jsx(o,{className:`blog-heading-${s}`,children:t},i)}if(a.startsWith("-"))return e.jsx("li",{style:{marginLeft:"20px"},children:a.substring(2)},i);if(a.match(/^\d+\./))return e.jsx("li",{style:{marginLeft:"20px"},children:a.replace(/^\d+\.\s/,"")},i);const m=a.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>");return m.trim()?e.jsx("p",{dangerouslySetInnerHTML:{__html:m}},i):null}):r;return e.jsxs(e.Fragment,{children:[e.jsx(N,{}),e.jsxs("div",{className:"blog-container",children:[e.jsxs("button",{onClick:()=>d(-1),className:"blog-back-button",children:[e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})}),"Back"]}),e.jsxs("div",{className:"blog-header",children:[e.jsx("span",{className:"blog-date",children:C(n.date)}),e.jsx("h1",{className:"blog-title",children:n.title}),e.jsx("div",{className:"blog-metadata",children:e.jsx("div",{className:"blog-tags",children:n.tags.map((r,a)=>e.jsx("span",{className:"blog-tag",children:r},a))})}),e.jsx("div",{className:"blog-description",children:n.description})]}),e.jsx("div",{className:"blog-content",children:D(n.content)})]}),e.jsx(E,{})]})};export{A as default};
