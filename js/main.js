$(document).on("click", ".nav-bar-toggle", function() {
  $(".sidebar").toggleClass("open");
})

$(document).on("click", ".hide-sidebar", function() {
  $(".sidebar").removeClass("open");
})

$(document).on("click", ".nav-item", function() {
  let id = $(this).data("target");
  scrollTo(id);
})

$(document).on("click", ".sidebar-item", function() {
  $(".sidebar").removeClass("open");
  let id = $(this).data("target");
  scrollTo(id);
})

function scrollTo(id) {
  if (id) {
    $(id).find(".section-content").collapse("show");
    setTimeout(function() {
      $('html, body').animate({
        scrollTop: $(id).offset().top
      }, 500);
    }, 300);
  }
}

$(document).ready(function() {
  $(".section-content").eq(0).collapse("show");
})

$(window).on("resize", calculateTimeline);

$(document).on("shown.bs.collapse", "#exp .section-content", createTimeline);

function createTimeline() {
  var date_options = {year: 'numeric', month: 'numeric'};
  var timeline = [
    {
      time: new Date("2017-09-01").getTime(),
      content: "Công ty Sao Khuê",
      title: "Làm việc tại công ty Sao Khuê"
    },
    {
      time: new Date("2019-11-01").getTime(),
      content: "Toyota Việt Nam",
      title: "Làm việc Onsite tại Toyota Việt Nam"
    },
    {
      time: new Date("2020-02-01").getTime(),
      content: "Công ty Sao Khuê",
      title: "Tiếp tục làm việc tại công ty Sao Khuê"
    },
    {
      time: new Date().getTime(),
      content: "Hiện tại",
      title: "Hiện tại"
    }
  ];
  timeline.sort((a,b) => a.time - b.time);
  var total = timeline[timeline.length - 1].time - timeline[0].time;
  var timelineElement = document.getElementById("timeline");
  if (!timelineElement.childNodes.length) {
    var height = timeline.length * 200;
    for (var i = 0; i < timeline.length; i++) {
      var div = document.createElement("div");
      div.classList.add("timeline-event");
      div.style.backgroundColor = getRandomColor();
      if (timeline[i + 1]) div.style.height = ((timeline[i + 1].time - timeline[i].time) * height / total) + "px";
      else div.style.height = 0;
      div.setAttribute("title", timeline[i].title);
      timelineElement.appendChild(div);

      var arrow = document.createElement("span");
      arrow.classList.add("timeline-arrow");
      arrow.classList.add("fa");
      arrow.classList.add("fa-2x");
      arrow.classList.add(i % 2 == 0 ? "fa-caret-right" : "fa-caret-left");
      arrow.style.top = ((timeline[i].time - timeline[0].time) * height / total) + "px";
      arrow.style.left = i % 2 == 0 ? "calc(50% - 15px)" : "calc(50% + 5px)";
      timelineElement.appendChild(arrow);
      var arrowWidth = arrow.offsetWidth;

      var span = document.createElement("span");
      span.classList.add("timeline-text");
      span.innerText = new Date(timeline[i].time).toLocaleDateString("vi", date_options) + ": " + timeline[i].content;
      span.style.top = ((timeline[i].time - timeline[0].time) * height / total) + "px";
      span.setAttribute("title", new Date(timeline[i].time).toLocaleDateString("vi", date_options) + ": " + timeline[i].content);
      timelineElement.appendChild(span);
      if (i % 2 == 0) span.classList.add("right");
      span.style.left = i % 2 == 0 ? "calc(50% - " + (10 + arrowWidth + span.offsetWidth) + "px)" : "calc(50% + " + (10 + arrowWidth) + "px)";
    }
  }
}

function calculateTimeline() {
  var timelineText = document.querySelectorAll(".timeline-text.right");
  for (var i = 0; i < timelineText.length; i++) {
    var width = timelineText[i].offsetWidth;
    timelineText[i].style.left = "calc(50% - " + (20 + width) + "px)";
  }
}


function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
