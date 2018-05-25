// HTML AND CSS HAVE PRE AND POST QUIZZES FOR SECTIONS 1-4

const GET_HTML_QUIZZES = "GET_HTML_QUIZZES";

const initialState = {
  html: {
    sectionOne: {
      prompt: `Let's start with a quick quiz!`,
      pre: {
        one: {
          prompt: "What are the three languages used in most modern websites?",
          answers: [
            "HTML, CSS, and Javascript",
            "Python, Perl, C#",
            "Java, C++, Swift",
            "Vue, Angular, React"
          ],
          correct: "HTML, CSS, and Javascript"
        },
        two: {
          prompt: "What is the correct syntax for HTML elements?",
          answers: [`"<tag> </tag>", "tag" "/tag"`, "(tag) (/tag)"],
          correct: "<tag> </tag>"
        },
        three: {
          prompt: "Which of these is not an HTML tag?",
          answers: ["<container> </container>", "<p> </p>", "<img> </img>"],
          correct: "<container> </container>"
        }
      },
      post: {
        one: {
          prompt: "What does HTML stand for?",
          answers: [
            "Hyper Text Markup Language",
            "HTTP Merged List",
            "Hot Typed Miscellanious Location"
          ],
          correct: "Hyper Text Markup Language"
        },
        two: {
          prompt: "What does HTML display on a website?",
          answers: ["Content", "Style", "Functionality"],
          correct: "Content"
        },
        three: {
          prompt: "What is an HTML element?",
          answers: [
            "The building block of HTML documents",
            "The URL of a website",
            "A script added to a website"
          ],
          correct: "The building block of HTML documents"
        }
      }
    },
    sectionTwo: {
      pre: {
        one: {
          prompt:
            "True or False: By default, h1 elements are smaller than h2 elements.",
          answers: ["True", "False"],
          correct: ["False"]
        },
        two: {
          prompt: "True or False: HTML describes the content of a website.",
          answers: ["True", "False"],
          correct: ["True"]
        },
        three: {
          prompt:
            "True or False: HTML elements can be rendered inside of other elements",
          answers: ["True", "False"],
          correct: ["True"]
        }
      },
      post: {
        one: {
          prompt: "What are tags?",
          answers: [
            "Data that tell a browser how to render an element",
            "The words that wrap elements",
            "Both A and B"
          ],
          correct: "Both A and B"
        },
        two: {
          prompt: "What is the correct syntax for tags?",
          answers: ["<h1> </h1>", '"h1" "/h1"', "(h1) (/h1)"],
          correct: "<h1> </h1>"
        },
        three: {
          prompt: "What is the correct syntax for lists?",
          answers: [
            "<ul> <li>List item</li> </ul>",
            "<li> <ul>List item</ul> </li>",
            "<li>List item</li>"
          ],
          correct: "<ul> <li>List item</li> </ul>"
        }
      }
    },
    sectionThree: {
      pre: {
        one: {
          prompt: "What is a string?",
          answers: [
            "Something wrapped in quotations",
            "Many lines of related code",
            "Code that changes with inputs"
          ],
          correct: "Something wrapped in quotations"
        },
        two: {
          prompt:
            "True or False: the class attribute helps make CSS styling easier",
          answers: ["True", "False"],
          correct: "True"
        },
        three: {
          prompt: "True or False: attribute values are generally strings",
          answers: ["True", "False"],
          correct: "True"
        }
      },
      post: {
        one: {
          prompt: "What do tag attributes do?",
          answers: [
            "Add extra functionality to elements",
            "Change the color of elements",
            "Change the font size of elements"
          ],
          correct: "Add extra functionality to elements"
        },
        two: {
          prompt: "What two attributes are required for an image tag?",
          answers: ["src and alt", "a and href", "txt and loc"],
          correct: "src and alt"
        },
        three: {
          prompt: "What is the purpose of a string?",
          answers: [
            "To characterize a series of words or characters as data",
            "To declare a variable for future use",
            "To change styling on a website"
          ],
          correct: "To display a series of words or characters"
        }
      }
    },
    sectionFour: {
      pre: {
        one: {
          prompt:
            "True or False: Google is a great resource if you ever have any coding questions.",
          answers: ["True", "False"],
          correct: "True"
        },
        two: {
          prompt:
            "True or False: <!DOCTYPE html> is required at the beginning of every HTML document.",
          answers: ["True", "False"],
          correct: "True"
        },
        three: {
          prompt: "What is the purpose of the <head> element?",
          answers: [
            "To store data about your website like the character set, tab title, and CSS styling",
            "To make a banner for a website",
            "To make a watermark for a website"
          ],
          correct:
            "To store data about your website like the character set, tab title, and CSS styling"
        }
      },
      post: {
        one: {
          prompt: "What does <!DOCTYPE html> do?",
          answers: [
            "Tells the browser to read your code as HTML",
            "Gives your website a banner",
            "Plays music through your website"
          ],
          correct: "Tells the browser to read your code as HTML"
        },
        two: {
          prompt: "What does the <title> tag do?",
          answers: [
            "Changes the title displayed in the browser tab",
            "Changes the title of a header",
            "Changes the title of an image"
          ],
          correct: "Changes the title displayed in the browser tab"
        },
        three: {
          prompt:
            "Where do you place elements in the layout of your HTML document?",
          answers: [
            "Wrapped in the <body></body> tags",
            "Outside of the <html></html> tags",
            "Before <!DOCTYPE html"
          ],
          correct: "Wrapped in the <body></body> tags"
        }
      }
    }
  }
};

export function getHtmlQuestions() {
  return {
    type: GET_HTML_QUIZZES
  };
}

export default function quizReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_HTML_QUIZZES}`:
      return state.html;

    default:
      return state;
  }
}
