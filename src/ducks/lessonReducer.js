const GRADE_HTML_ACTIVITIES_123 = "GRADE_HTML_ACTIVITIES_123";
const GRADE_HTML_ACTIVITY_4 = "GRADE_HTML_ACTIVITY_4";
const GRADE_HTML_ACTIVITY_5 = "GRADE_HTML_ACTIVITY_5";
const GRADE_HTML_ACTIVITY_6 = "GRADE_HTML_ACTIVITY_6";
const GRADE_HTML_ACTIVITY_7 = "GRADE_HTML_ACTIVITY_7";

var initialState = {
  regex: {
    1: /\<h1>[a-z,A-Z,0-9,_,\s,\W]+<\/h1>/,
    2: /\<p>[a-z,A-Z,0-9,_,\s, \W]+<\/p>/,
    3: /\<ul>(<li>[a-z,A-Z,0-9,_,\s, \W]*<\/li>)+<\/ul>/
  },
  strings: {
    1: "<h1>Hello world!</h1>", //add symbols
    2: "<p>Joe Anderson the third</p>",
    3: "<ul><li>Steak</li><li>Eggs</li></ul>"
  }
};

// HTML ACTIVITY FUNCTIONS //

// 1 - In the text editor, try creating your own h1 element. Rendering ‘Hello World!’ is a rite of passage for coders, so put that in your header
// On Fail - Whoops! Try again. Your h1 element should be structured like ours above.
// On Success - Hello World! You’re now officially a coder!

// 2 - Let’s make another element using a paragraph (<p>) tag in the text editor. This time, make the <p> tab display your name.
// On Fail - Close! Try again. This time, the element should look like your header, but instead of h1 tags, it should have p tags.
// On Success - Nice work! Now you can make headers and paragraphs for a website.

// 3 - For this last exercise, you’ll make a list of your favorite foods using the <ul> and <li> tags. UL stands for unordered (bulleted) list. The <ul> tag wraps around the list item (<li>) tags. Here’s some of my favorite foods in a list:

// <ul>
//    <li>Steak</li>
//    <li>Mashed Potatoes</li>
//    <li>Green Beans</li>
// </ul>

// Now it’s your turn. You can make a list of your favorite movies, hobbies, or sports - the great thing about coding is you can make anything you want.
// On Fail - Almost! Check out my list of favorite foods and see what you missed
// On Success - Nice list! Now you know how to render three HTML elements. Now let’s learn how to do images.

// function test(regex, str){
//   return str.search(regex) !== -1 ? true:false
//  }

export function gradeHtmlActivities123(regex, str) {
  let result = str.search(regex) !== -1 ? true : false;
  return {
    type: GRADE_HTML_ACTIVITIES_123,
    payload: result
  };
}

// 4 - Now it’s your turn to render an img element in the text editor. You can use an image from Google.
// On Fail - Try again! Make sure you’re wrapping the value of the attribute in quotes
// On Success - Great work! Now you know how to render images in HTML!

export function gradeHtmlActivity4(userInput) {
  return {
    type: GRADE_HTML_ACTIVITY_4,
    payload: userInput
  };
}

// 5 - Using the text editor, try to make your own link. It can be to Google like mine, or wherever you want

export function gradeHtmlActivity5(userInput) {
  return {
    type: GRADE_HTML_ACTIVITY_5,
    payload: userInput
  };
}

// 6 - Class names should be as descriptive as possible without being too verbose. In the text editor, make your own <h1> tag with a class name of 'company-name'.

export function gradeHtmlActivity6(userInput) {
  return {
    type: GRADE_HTML_ACTIVITY_6,
    payload: userInput
  };
}

// 7 - This activity will be pretty straightforward. Just type <!DOCTYPE html> in the text editor. Doctype isn't case sensitive.

export function gradeHtmlActivity7(userInput) {
  return {
    type: GRADE_HTML_ACTIVITY_5,
    payload: userInput
  };
}

// EXPORT LESSON REDUCER //

export default function lessonReducer(state = initialState, action) {
  switch (action.type) {
    case `${GRADE_HTML_ACTIVITIES_123}`:
      return action.payload;

    case `${GRADE_HTML_ACTIVITY_4}`:
      let filtered = action.payload.split(/['\"]/).filter(Boolean);
      if (
        filtered[0] === "<img src=" &&
        filtered[2] === " alt=" &&
        filtered[4] === ">"
      ) {
        return "Great work! Now you know how to render images in HTML!";
      } else if (filtered[0] === "<img src=" && filtered[2] === " alt=") {
        return "You forgot to close your element!";
      } else if (filtered[0] === "<img src=" && filtered[4] === ">") {
        return "Check your alt attribute!";
      } else if (filtered[2] === "alt=" && filtered[4] === ">") {
        return "Check your img tag and src attribute!";
      }

    case `${GRADE_HTML_ACTIVITY_5}`:
      let filter = action.payload.split(/['\"]/);
      if (filtered[0] === "<a href=" && filtered[2] === ">") {
        return "Nice work! You can set a link's href to any link on the internet.";
      } else {
        return "Try again - your element should look like this: <a href='{your link}'>";
      }

    case `${GRADE_HTML_ACTIVITY_6}`:
      if (
        (action.payload.slice(0, 24) === "<h1 class='company-logo'>" ||
          action.payload.slice(0, 24) === `<h1 class="company-logo">`) &&
        action.payload.slice(0, -5) === "</h1>"
      ) {
        return "Great job! You'll see more of these when we learn CSS.";
      } else {
        return "Try again.";
      }

    case `${GRADE_HTML_ACTIVITY_7}`:
      if (action.payload.toLowerCase() === "<!doctype html>") {
        return "That was easy!";
      } else {
        return "Try again!";
      }

    default:
      return state;
  }
}
