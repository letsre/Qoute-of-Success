$(document).ready(function () {
  const quotesArray = [
    {
      text: "“No experience is a cause of success or failure. We do not suffer from the shock of our experiences, so-called trauma - but we make out of them just what suits our purposes.”",
      author: "Alfred Adler",
    },
    {
      text: "“You can't climb the ladder of success with your hands in your pockets.”",
      author: "Arnold Schwarzenegger",
    },
    {
      text: "“The key to success is to focus our conscious mind on things we desire not things we fear. ”",
      author: "Brian Tracy",
    },
    {
      text: "“The road to success is always under construction.”",
      author: "Steve Harvey",
    },
    {
      text: "“The more people you help become successful the more successful you become.”",
      author: "Steve Harvey",
    },
    {
      text: "“Success is the progressive realization of a worthy goal or ideal.”",
      author: "Earl Nightingale",
    },
    {
      text: "“You know you are on the road to success if you would do your job and not be paid for it.”",
      author: "Oprah Winfrey",
    },
    {
      text: "“Your success and happiness lie in you.”",
      author: "Helen Keller",
    },
    {
      text: "“Success is like reaching an important birthday and finding you're exactly the same.”",
      author: "Audrey Hepburn",
    },
    {
      text: "“Success comes to those who become success conscious.”",
      author: "Napoleon Hill",
    },
    {
      text: "“Success is about doing the right thing, not about doing everything right.”",
      author: "Gary Keller",
    },
  ];

  // Function to update the displayed quote
  function randomQuote() {
    const randomIndex = Math.floor(Math.random() * quotesArray.length);
    $(".qoute-text").html(quotesArray[randomIndex].text);
    $(".quote-author").html("—" + quotesArray[randomIndex].author);
    // Change CSS (example: background color)
    $("body").css({
      "background-color": getRandomColor(),
    });
    // Set initial opacity to 0.1
    $("p,span").css("opacity", 0.1);

    // Animate the opacity to 1 over 1 second
    $("p,span").animate(
      {
        opacity: 1,
      },
      {
        duration: 1000,
        step: function (now, fx) {
          // This function will be called on each step of the animation
          // You can use it to update the styles during the animation
          // For example, you can log the current opacity to the console
        },
      }
    );
  }

  // Function to generate a random color (for demonstration purposes)
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Add an event listener to the "Generate New Quote" button using jQuery
  $(".new-qoute").on("click", function () {
    setTimeout(function () {
      randomQuote();
    }, 500);
  });

  // Initial quote on page load
  randomQuote();
});
