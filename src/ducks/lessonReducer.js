const GET_HTML_LESSONS = "GET_HTML_LESSONS";
const GRADE_HTML_ACTIVITY_1 = "GRADE_HTML_ACTIVITY_1";
const GRADE_HTML_ACTIVITY_2 = "GRADE_HTML_ACTIVITY_2";
const GRADE_HTML_ACTIVITY_3 = "GRADE_HTML_ACTIVITY_3";

let initialState = {
  currentLesson: 1,
  html: {
    lessons: {
      lesson1: `HTML stands for Hyper Text Markup Language. It is the language used to display content on a webpage - like text, images, and links. The basic building block of HTML is an element`,

      lesson2:
        "Elements are wrapped in tags that tell the browser how to render the element. Examples of tags are headers (<h1>), paragraphs (<p>), images (<img>), and lists (<ul> / <li>). Elements have an opening and closing tag. They look similar, but the closing tag has a forward slash at the beginning. Here's an example of a header element: <h1>Hello World!</h1>",

      lesson3: `Some elements require attributes to work. Attributes are placed in the opening tag of an element, and add additional functionality to elements like <img>. An image takes two attributes: src (source) and alt (alternative text). The source of an image is the URL or local computer file you want to display, and the alternative text is a custom value that will appear when a user hovers their mouse over an image. Here's an example of an image element:
      
      <img src="http://smileypic.jpg" alt="This shows up when you hover!"></img>
      
      Notice the values for src and alt are wrapped in quotation marks. Anything wrapped in quotes is called a string.`,

      lesson4: `Now that you know how to make a few elements, let's go over on the layout of an HTML document. Every HTML document starts with <!DOCTYPE html>. This line tells a browser to read a document as HTML. Next, you'll need <html> tags below your doctype declaration. Everything else in your document will be contained within these two html tags. The next step is to create an opening and closing <head> tag in HTML. The head portion of your document contains data about your website - like what displays in a browser tab with <title>. Finally, outside of the <head> but still within the <html> tags, we use <body> to contain our website's elements. `
    },
    activities: {
      activity1: {
        id: 1,
        open: "<h1>",
        close: "</h1>",
        success: "Hello World! You're now officially a coder!",
        fail: "Try again! Your h1 element should be structured like ours above",
        flag: false // if student successfully completes the activity, this becomes true
      },

      activity2: {
        id: 2,
        open: "<p>",
        close: "</p>",
        success:
          "Nice work! Now you know how to make haeders and paragraphs for a website.",
        fail:
          "Close - try again. This time, the element should look like your h1 element, but with p tags",
        flag: false
      },

      activity3: {
        id: 3,
        openUL: "<ul>",
        closeUL: "</ul>",
        openLI: "<li>",
        closeLI: "</li>",
        success:
          "Nice list! Now you know how to render three HTML elements. Next we'll learn how to render images.",
        fail:
          "Almost! Check out my list of favorite foods and see what you missed.",
        flag: false
      }
    }
  }
};

// LESSON FUNCTIONS //

export function getHtmlLessons(html) {
  return { type: GET_HTML_LESSONS };
}

// HTML ACTIVITY FUNCTIONS //

// 1 - In the text editor, try creating your own h1 element. Rendering ‘Hello World!’ is a rite of passage for coders, so put that in your header
// On Fail - Whoops! Try again. Your h1 element should be structured like ours above.
// On Success - Hello World! You’re now officially a coder!

export function gradeHtmlActivity1(userInput) {
  return {
    type: GRADE_HTML_ACTIVITY_1,
    payload: userInput
  };
}

// 2 - Let’s make another element using a paragraph (<p>) tag in the text editor. This time, make the <p> tab display your name.
// On Fail - Close! Try again. This time, the element should look like your header, but instead of h1 tags, it should have p tags.
// On Success - Nice work! Now you can make headers and paragraphs for a website.

export function gradeHtmlActivity2(userInput) {
  return {
    type: GRADE_HTML_ACTIVITY_2,
    payload: userInput
  };
}

// 3 - For this last exercise, you’ll make a list of your favorite foods using the <ul> and <li> tags. UL stands for unordered (bulleted) list. The <ul> tag wraps around the list item (<li>) tags. Here’s some of my favorite foods in a list:

// <ul>
//    <li>Steak</li>
//    <li>Mashed Potatoes</li>
//    <li>Green Beans</li>
// </ul>

// Now it’s your turn. You can make a list of your favorite movies, hobbies, or sports - the great thing about coding is you can make anything you want.
// On Fail - Almost! Check out my list of favorite foods and see what you missed
// On Success - Nice list! Now you know how to render three HTML elements. Now let’s learn how to do images.

export function gradeHtmlActivity3(userInput) {
  return {
    type: GRADE_HTML_ACTIVITY_3,
    payload: userInput
  };
}

// EXPORT LESSON REDUCER //

export default function lessonReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_HTML_LESSONS}`:
      return state.html.lessons;
    // case `${GRADE_HTML_ACTIVITY_1}`:
    //   if (
    //     action.payload.trim().includes(state.html.activity1.open) &&
    //     action.payload.trim().includes(state.html.activity1.close)
    //   ) {
    //     state.html.activity1.flag = true;
    //     return state.html.activity1.success;
    //   } else {
    //     return state.html.activity1.fail;
    //   }

    // case `${GRADE_HTML_ACTIVITY_2}`:
    //   if (
    //     action.payload.trim().includes(state.html.activity2.open) &&
    //     action.payload.trim().includes(state.html.activity2.close)
    //   ) {
    //     state.html.activity2.flag = true;
    //     return state.html.activity2.success;
    //   } else {
    //     return state.html.activity2.fail;
    //   }

    // case `${GRADE_HTML_ACTIVITY_3}`:
    //   let userListItems = action.payload
    //     .trim()
    //     .slice(4, action.payload.trim().length - 5);

    //   if (
    //     action.payload.trim().includes(state.html.activity3.openUL) &&
    //     action.payload.trim().includes(state.html.activity3.closeUL)
    //   ) {
    //     if (
    //       userListItems.includes(state.html.activity3.openLI) &&
    //       action.payload.trim().includes(state.html.activity3.closeLI)
    //     ) {
    //       state.html.activity3.flag = true;
    //       return state.html.activity1.success;
    //     } else {
    //       return state.html.activity3.fail;
    //     }
    //   } else {
    //     return state.html.activity3.fail;
    //   }

    default:
      return state;
  }
}
