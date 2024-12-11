let homeContent = {
    heading: "Beary's Breakfast Bar",
    review: {
        text: "",
        author: "Goldilocks"
    },
    hours: {
        sunday: "Sunday: 8am-8pm",
        monday: "Monday: 6am-6pm",
        tuesday: "Tuesday: 6am-6pm",
        wednesday: "Wednesday: 6am-6pm",
        thursday: "Thursday: 8am-10pm",
        friday: "Friday: 8am-10pm",
        saturday: "Saturday: 8am-10pm",
    },
    location: "123 Forest Drive, Forestville, Maine",
}

let createElement = (type, initClass, text) => {
    const el = document.createElement(type);
    if (initClass) {
        el.classList.add(initClass);
    };
    if (text) {
        el.textContent = text;
    };
    return el;
};

const home = createElement("div"); 
const headerContainer = createElement("div", "heading-container", "");
const reviewContainer = createElement("div", "reviewContainer", "");
const hoursContainer = createElement("div", "hoursContainer", "");
const hoursList = createElement("ul", "hours-list", "");
const locationContainer = createElement("div", "locationContainer", "");

headerContainer.appendChild(createElement("h2", "section-heading", homeContent.heading));

reviewContainer.appendChild(createElement("p", "quote-text", homeContent.review.text));
reviewContainer.appendChild(createElement("h3", "author" , homeContent.review.author));

for (const day in homeContent.hours) {
    hoursList.appendChild(createElement("li", "hours-list-item", homeContent.hours[day]));
}
hoursContainer.appendChild(createElement("h2", "section-heading", "Business Hours"));
hoursContainer.appendChild(hoursList);

locationContainer.appendChild(createElement("h2", "section-heading", "Location"));
locationContainer.appendChild(createElement("p", "location-details", homeContent.location));

home.appendChild(headerContainer);
home.appendChild(reviewContainer);
home.appendChild(hoursContainer);
home.appendChild(locationContainer);
export default home;