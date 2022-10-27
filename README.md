# Server name:
## Schooling.com server

# Features of this server project
- Show all courses endpoint
- Find course by id endpoint
- Find course by title endpoint

# Used technologies, framework and libraries
1. Nodejs
2. Express.js (Framework)
3. Vercel CLI

# All Endpoints
## All courses
- https://schooling-server.vercel.app/courses

## Find course by id
- https://schooling-server.vercel.app/course/id/{id}
- https://schooling-server.vercel.app/course/id/63578757df9e8cfcb2899f08

## Find course by title
- https://schooling-server.vercel.app/checkout/title/{title}
- https://schooling-server.vercel.app/checkout/title/HTML & CSS

## Find course for checkout by id
- https://schooling-server.vercel.app/checkout/id/{id}
- https://schooling-server.vercel.app/checkout/id/6357875740638de73c92e4ac

## Example of one result
```json
[
    {
        "id": "63578757df9e8cfcb2899f08",
        "image": {
            "logo": "https://i.ibb.co/9WL0gr6/bootstrap-logo.png",
            "thumbnail": "https://i.ibb.co/G96Sfpf/bootstrap-thumbnail.png",
            "banner": "https://i.ibb.co/XYYfhnp/bootstrap-banner.jpg"
        },
        "title": "Bootstrap",
        "brief": "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.",
        "details": "Bootstrap is an HTML, CSS & JS Library that focuses on simplifying the development of informative web pages (as opposed to web apps). The primary purpose of adding it to a web project is to apply Bootstrap's choices of color, size, font and layout to that project. As such, the primary factor is whether the developers in charge find those choices to their liking. Once added to a project, Bootstrap provides basic style definitions for all HTML elements. The result is a uniform appearance for prose, tables and form elements across web browsers. In addition, developers can take advantage of CSS classes defined in Bootstrap to further customize the appearance of their contents. For example, Bootstrap has provisioned for light- and dark-colored tables, page headings, more prominent pull quotes, and text with a highlight.",
        "stars": "4.1",
        "ratings": 8438,
        "likes": 98,
        "price": 83,
        "enrolled": 471,
        "features": [
            "Flexible deadlines: Reset deadlines in accordance to your schedule.",
            "Shareable Certificate: Earn a Certificate upon completion.",
            "100% online: Start instantly and learn at your own schedule.",
            "Web Design for Everybody: Basics of Web Development & Coding Specialization.",
            "Language: English, Bengali, Hindi & Spanish."
        ],
        "instructor": {
            "ins_name": "Adjivon Marieb",
            "ins_image": "https://i.ibb.co/xXnxmCF/adjivon-marieb-teacher.jpg"
        }
    },
]
```