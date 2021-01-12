(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{132:function(e,t,a){},134:function(e,t,a){"use strict";a.r(t);var r=a(2),i=a(0),n=a.n(i),s=a(42),o=a.n(s),c=a(103),l=a(104),d=a(112),h=a(109),m=a(108),b=a(53),j={fontFamily:"Cambria",backgroundColor:"whitesmoke"},u=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,i=new Array(r),n=0;n<r;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={},e.handleItemClick=function(t,a){var r=a.name;return e.setState({activeItem:r})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.activeItem;return Object(r.jsxs)(m.a,{style:j,children:[Object(r.jsx)("h1",{style:{margin:10,fontFamily:"Cambria",color:"dimgray",fontSize:"27px"},children:"Sumayyah Mariam"}),Object(r.jsx)(b.b,{to:"/reactportfolio/",children:Object(r.jsx)(m.a.Item,{style:{margin:10,fontFamily:"Cambria",color:"dimgray",fontSize:"18px"},name:"About",active:"About"===e,onClick:this.handleItemClick})}),Object(r.jsx)(b.b,{to:"/portfolio",children:Object(r.jsx)(m.a.Item,{style:{margin:10,fontFamily:"Cambria",color:"dimgray",fontSize:"18px"},name:"Portfolio",active:"Portfolio"===e,onClick:this.handleItemClick})})]})}}]),a}(i.Component),p=a(149),g=a(148),y={fontFamily:"Cambria",color:"dimgray",fontSize:"20px"},x=function(e){return Object(r.jsx)(g.a.Group,{children:Object(r.jsxs)(g.a,{children:[Object(r.jsx)("br",{}),Object(r.jsx)(g.a.Image,{size:"big",src:e.imageURL}),Object(r.jsxs)(g.a.Content,{children:[Object(r.jsx)("br",{}),Object(r.jsx)(g.a.Header,{style:y,children:e.name}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsxs)(g.a.Description,{style:y,children:[Object(r.jsx)("p",{children:e.description}),Object(r.jsx)("br",{}),Object(r.jsxs)("p",{children:[" Technologies used: ",e.technologies]}),Object(r.jsx)("br",{}),Object(r.jsx)("p",{children:Object(r.jsx)("a",{href:e.deployed,target:"_blank",children:"Deployed Link"})}),Object(r.jsx)("br",{}),Object(r.jsx)("p",{children:Object(r.jsx)("a",{href:e.github,target:"_blank",children:"GitHub Link"})})]})]})]})})},f=a.p+"static/media/trimfit.99a21c73.png",O=a.p+"static/media/eatburger.43658d3f.png",k=a.p+"static/media/Esthete.f657b5bf.PNG",v=a.p+"static/media/weatherApp.3a83a452.PNG",C=a.p+"static/media/empdirectory.dde630fa.png",w=a.p+"static/media/budgettrackerImage.fbb218ef.png",I=a.p+"static/media/gardencroft.f8a9b3f0.PNG",S={margin:20,border:"solid",padding:35,backgroundColor:"whitesmoke",borderWidth:"1px",borderColor:"darkgray",fontSize:"18px"},A=[{menuItem:"Garden Croft",render:function(){return Object(r.jsx)(p.a.Pane,{children:Object(r.jsx)(x,{imageURL:I,name:"Garden Croft",description:"Garden Croft is a plant nursery application that allows users to shop for plants and their favorite plants to a wishlist.",technologies:"React, React router, Semantic UI, Node.js, Express, Mongoose, BodyParser, Cors, dotenv, Stripe, Nodemailer",deployed:"https://gardencroft.herokuapp.com/",github:"https://github.com/Sumayyahm/GardenCroft"})})}},{menuItem:"trim(fit)",render:function(){return Object(r.jsx)(p.a.Pane,{children:Object(r.jsx)(x,{imageURL:f,name:"trim(fit)",description:"A fitness app that allows a user to schedule weekly workouts and search for workouts and save them using youtube API",technologies:"YouTube API, Google Maps API, Giphy API, Moment.js, HTML, Material Design Bootstrap, jQuery",deployed:"https://sumayyahm.github.io/trim-fit-/",github:"https://github.com/Sumayyahm/trim-fit-"})})}},{menuItem:"Esth\xe8te",render:function(){return Object(r.jsx)(p.a.Pane,{children:Object(r.jsx)(x,{imageURL:k,name:"Esth\xe8te",description:"Esthete Gallery is an art gallery management system that allows an art gallery owner to maintain details of artists and paintings with great ease. With the help of this app, gallery owners can store, view, and maintain inventory.",technologies:"bcryptjs, cloudinary, dotenv, Express, mysql2, passport.js, sequelize, express-handlebars, node, express",deployed:"https://esthetegallery.herokuapp.com/",github:"https://github.com/Sumayyahm/Project2"})})}},{menuItem:"EatDaBurger",render:function(){return Object(r.jsx)(p.a.Pane,{children:Object(r.jsx)(x,{imageURL:O,name:"Eat- Da Burger",description:"A burger logger app created with MYSQL, Node, Express, Handlebars and ORM that allows the user to log their favourite burger and then devour it!",technologies:"mysql, node, Express, express-handlebars",deployed:"https://stormy-dawn-28068.herokuapp.com/",github:"https://github.com/Sumayyahm/EatDaBurger"})})}},{menuItem:"Employee Directory",render:function(){return Object(r.jsx)(p.a.Pane,{children:Object(r.jsx)(x,{imageURL:C,name:"Employee Directory",description:"An employee directory that allows the user to view the entire employee directory,sort the employee names in descending or ascending order and search for employees by typing their name in the search box.",technologies:"React, Axios, Bootstrap, React-dom",deployed:"https://ancient-coast-86756.herokuapp.com/",github:"https://github.com/Sumayyahm/employee-directory"})})}},{menuItem:"Budget Tracker",render:function(){return Object(r.jsx)(p.a.Pane,{children:Object(r.jsx)(x,{imageURL:w,name:"Budget Tracker",description:"A budget tracker app that allows user to add expenses and deposits to their budget with or without a connection.",technologies:"Express, Mongoose, Morgan, Logger, Compression, Lite-Server",deployed:"https://still-ocean-73108.herokuapp.com/",github:"https://github.com/Sumayyahm/BudgetTracker"})})}},{menuItem:"Weather Dashboard",render:function(){return Object(r.jsx)(p.a.Pane,{children:Object(r.jsx)(x,{imageURL:v,name:"Weather Dashboard App",description:"A Weather dashboard that allows the user to display the current and future weather conditions for a searched city as well as display the last searched cities",technologies:"HTML, CSS Bootstrap, jQuery, Weather API",deployed:"https://sumayyahm.github.io/WeatherDashboard/",github:"https://github.com/Sumayyahm/WeatherDashboard"})})}}],P=function(){return Object(r.jsx)("div",{className:"ui mobile reversed equal width grid",children:Object(r.jsx)(p.a,{className:"column",style:S,menu:{fluid:!0,vertical:!0,tabular:!0},panes:A})})},M=a.p+"static/media/sumprofilepic.d9b6cfe3.jpg",E=(a(132),a(110)),L=a(147),D=a(150),R=a(58),G=a.p+"static/media/SumayyahMariamResume.27840ff7.pdf",B={fontFamily:"Cambria",color:"dimgray"};var N=function(){var e=n.a.useState(!1),t=Object(E.a)(e,2),a=t[0],i=t[1];return Object(r.jsxs)(L.a,{centered:!1,open:a,onClose:function(){return i(!1)},onOpen:function(){return i(!0)},trigger:Object(r.jsx)(D.a,{children:"Contact Me"}),children:[Object(r.jsx)(L.a.Header,{style:B,children:"Contact Information"}),Object(r.jsx)(L.a.Content,{children:Object(r.jsxs)(L.a.Description,{style:B,children:[Object(r.jsx)("p",{children:"Email Address: sumayyahmariam018@gmail.com"}),Object(r.jsx)("p",{children:"Phone Number: +1 (512) 888 4232"}),Object(r.jsxs)("p",{children:[Object(r.jsx)("a",{href:G,target:"_blank",children:"Resume"}),"    \u2003     ",Object(r.jsxs)("a",{href:"https://github.com/Sumayyahm",target:"_blank",children:[Object(r.jsx)(R.a,{name:"github"}),"Github Profile"]}),"   \u2003      ",Object(r.jsxs)("a",{href:"https://www.linkedin.com/in/sumayyahmariam/",target:"_blank",children:[Object(r.jsx)(R.a,{name:"linkedin alternate"}),"LinkIn Profile"]})]})]})}),Object(r.jsx)(L.a.Actions,{children:Object(r.jsx)(D.a,{onClick:function(){return i(!1)},children:"OK"})})]})},T={margin:20,border:"solid",padding:35,backgroundColor:"whitesmoke",borderWidth:"1px",borderColor:"darkgray"},F={fontFamily:"Cambria",color:"dimgray",fontSize:"18px"},z=function(){return Object(r.jsx)(g.a.Group,{style:T,children:Object(r.jsxs)(g.a,{children:[Object(r.jsx)(g.a.Image,{size:"medium",src:M,circular:!0}),Object(r.jsxs)(g.a.Content,{children:[Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)(g.a.Header,{id:"about-header",style:F,children:"About Me"}),Object(r.jsx)("br",{}),Object(r.jsxs)(g.a.Description,{style:F,children:[Object(r.jsx)("p",{children:"My name is Sumayyah Mariam. I have a bachelors degree in Electronics and Communication Engineer from India. I am looking for a career in Web Development. I am currently taking classes at the Full Stack Coding Boot Camp at the University of Texas, Austin."}),Object(r.jsx)("p",{children:"Fun Facts: I was an elementary school teacher before I moved to Texas. I enjoy cooking and gardening. I am an avid Netflix viewer and I have a flair for learning languages. I live in Austin, Texas with my husband."}),Object(r.jsx)("p",{children:"My skill set : HTML, CSS, React, jQuery, MYSQL, Sequelize, MongoDB, Node, Express"})]}),Object(r.jsx)(g.a.Extra,{children:Object(r.jsx)(N,{style:F})})]})]})})},U=a(146),W={fontFamily:"Cambria",color:"dimgray",backgroundColor:"whitesmoke",paddingTop:"12px",textAlign:"center"};var H=function(){return Object(r.jsx)(U.a,{children:Object(r.jsx)("div",{style:W,className:"ui fixed bottom sticky menu",children:"\xa9 2020 Site built by SumayyahMariam"})})},q=a(10);var Q=function(){return Object(r.jsxs)("div",{className:"body",children:[Object(r.jsx)(u,{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsxs)(q.c,{children:[Object(r.jsx)(q.a,{exact:!0,path:["/","/reactportfolio"],children:Object(r.jsx)(z,{})}),Object(r.jsx)(q.a,{path:"/portfolio",children:Object(r.jsx)(P,{})})]}),Object(r.jsx)(H,{})]})};a(133);o.a.render(Object(r.jsx)(b.a,{children:Object(r.jsx)(Q,{})}),document.getElementById("root"))}},[[134,1,2]]]);
//# sourceMappingURL=main.ff7b08b8.chunk.js.map