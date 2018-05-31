const GRADE_HTML_ACTIVITIES_123 = "GRADE_HTML_ACTIVITIES_123";
const GRADE_HTML_ACTIVITY_4 = "GRADE_HTML_ACTIVITY_4";
const GRADE_HTML_ACTIVITY_5 = "GRADE_HTML_ACTIVITY_5";
const GRADE_HTML_ACTIVITY_6 = "GRADE_HTML_ACTIVITY_6";
const GRADE_HTML_ACTIVITY_7 = "GRADE_HTML_ACTIVITY_7";
const GRADE_CSS_ACTIVITIES = "GRADE_CSS_ACTIVITIES";

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
  },
  css: {
    activity1: {
      solution: "h1 {color: yellow;}",
      success:
        "Nice job! Selectors are an important part of CSS - they are the target of your styling modifications",
      fail: "Try again. Double check your syntax!"
    },
    activity2: {
      solution: ".contact-info {font-size: 14px;}",
      success:
        'Nice one! Class selectors are very important too. You can also give elements an id attribute and reference them with a "#" in CSS',
      fail:
        "Try again, be sure to use period notation in your selector to specify the class"
    },
    activity3: {
      solution: 'p {font-size: 16px; color: purple; font-family: "Helvetica";}',
      success:
        "Those are some of the basic font styling modifiers you can use, but there are tons more",
      fail:
        'This section covers a lot of material - your answer should follow this syntax: p {font-size: 16px; color: purple; font-family: "Helvetica";}'
    },
    activity4: {
      solution: "div {border: solid black 1px; background-color: gold;}",
      success:
        "Borders can also have properties like shadowing and relief that makes them appear to be 3D on a page",
      fail:
        "Try again! The border properties are ordered by style first, color second, and thickness third. Thickness needs to be in px"
    },
    activity5: {
      solution: ".company-logo {background-image: url(``);}",
      success:
        "Background image is good to use in a pinch if you forgot to include a <img> element in your html doc. The syntax is different from <img> though!",
      fail:
        "Try again, make sure you are using the right syntax for background-image!"
    },
    activity6: {
      solution:
        ".parent {background-color: black; height: 100px; width: 100px;} .child {background-color: green; height: 50%; width: 50%;}",
      success:
        "Good job setting that up - next we will show how margin and padding affect these properties differently",
      fail:
        "Try again. You want to format both elements, like this: .parent {background-color: black; height: 100px; width: 100px;} .child {background-color: green; height: 50%; width: 50%;}"
    },
    activity7: {
      solution:
        ".parent {background-color: black; height: 100px; width: 100px; margin: 10px;} .child {background-color: green; height: 50%; width: 50%;}",
      success: "Nice job! What did you see change?",
      fail:
        "Try again - just add the margin modifier to the existing parent CSS statement"
    },
    activity8: {
      solution:
        ".parent {background-color: black; height: 100px; width: 100px; margin: 10px;} .child {background-color: green; height: 50%; width: 50%; padding: 50px;}",
      success:
        "Cool so now we see that the padding pushes in from the border of the child element toward the text content, shrinking the size available for the text",
      fail:
        "Give it another go. Like the last problem, just add the padding modifier to the child statement after the existing declarations"
    }
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

// CSS TESTS //

export function gradeCssActivities(userInput, activityKey) {
  let result = "";
  if (input === initialState[activity].solution) {
    result = initialState[activity].success;
    return result;
  } else {
    result = initialState[activity].fail;
    return result;
  }
  return {
    type: GRADE_CSS_ACTIVITIES,
    payload: result
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

    case `${GRADE_CSS_ACTIVITIES}`:
      return action.payload;

    default:
      return state;
  }
}
