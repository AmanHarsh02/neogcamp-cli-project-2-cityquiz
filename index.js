var chalk = require("chalk");
var readLine = require("readline-sync")

var score = 0

var highScores = [
  {
    name: "Aman",
    score: 11
  },
  {
    name:"Anshul",
    score: 9
  }
]

var questions = [
  {
    question: `This city is known as the Pink City of India?\n
A. Delhi.
B. Ajmer.
C. Jaipur.
D. Chandigarh.`,
    answer: "c",
    rightAnswer: "Jaipur is also knows as the Pink City of India."
  },
  {
    question: `This city in India has the oldest prison in the country?\n
A. Bengaluru.
B. Chennai.
C. Agra.
D. Mumbai.`,
    answer: "b",
    rightAnswer: "Madras Central Prison was one of the oldest prisons in India. It was located in Chennai (formerly Madras) in the Indian state of Tamil Nadu."
  },
  {
    question: `This city is known to be the original home to the Koh- I- Noor?\n
A. Delhi.
B. Hyderabad.
C. Bengaluru.
D. Chennai.`,
    answer: "b",
    rightAnswer: "Hyederabad is the original home of Koh- I- Noor."
  },
  {
    question: `The logo of State Bank Of India is inspired from Kankaria Lake in this city?\n
A. Kolkata.
B. Allahabad.
C. Ahemdabad.
D. Surat.`,
    answer: "c",
    rightAnswer: "State Bank of India's logo, a blue circle with a cut in the centre, was designed by the National Institute of Design, Ahmedabad and is said to be inspired by the city's Kankaria Lake."
  },
  {
    question: `This Indian city has the highest clock tower in India?\n
A. Kanpur.
B. Lucknow.
C. Chandigarh.
D. Prayagraj.`,
    answer: "b",
    rightAnswer: "It is in Lucknow. It is located adjacent to the Rumi Darwaza, Bada Imambada and Teele Wali Masjid. Built in the year 1881, Husainabad Clock Tower is adjudged as the tallest among all the clock towers in India. It was built as a replica of the Big Ben clock tower of London."
  },
  {
    question: `This city is known as the Blue City of India?\n
A. Jaipur.
B. Indore.
C. Jodhpur.
D. Kochi.`,
    answer: "c",
    rightAnswer: "Jodhpur is also known as the Blue City of India."
  },
  {
    question: `This is the first planned city of India?\n
A. Ajmer.
B. Chandigarh.
C. Ajmer.
D. Jaipur.`,
    answer: "d",
    rightAnswer: "Jaipur is the first planned city of India."
  },
  {
    question: `Which City is known as City of Lakes?\n
A. Udaipur.
B. Chandigarh.
C. Mumbai.
D. Kochi.`,
    answer: "a",
    rightAnswer: "Udaipur is also known as the City of Lakes."
  },
  {
    question: `This city is also known as the City of Joy of India?\n
A. Bengaluru.
B. Kolkata.
C. Mumbai.
D. Kashmir.`,
    answer: "b",
    rightAnswer: "Kolkata is also known as the City of Joy of India."
  },
  {
    question: `This city is also known as the Silicon Valley of India?\n
A. Mumbai.
B. Delhi.
C. Bengaluru.
D. Ladakh.`,
    answer: "c",
    rightAnswer: "Bengaluru is also known as the Silicon Valley of India."
  },
  {
    question: `This city is also known as the Yoga Capital of the World?\n
A. Haridwar.
B. Ahemdabad.
C. Rishikesh.
D. Ladakh.`,
    answer: "c",
    rightAnswer: "Rishikesh is also known as the Yoga Capital of the World."
  }
]

function welcomeUser() {
  var userName = readLine.question("Please Enter Your Name: ")

  console.log(chalk.blue("\nHey! " + userName + ". Wecome to the City Quiz\n") + chalk.red("Let's see how well do you know about Indian Cities..."))

  var userResponse = readLine.question('\nPress Enter to start testing your General Knowledge!', {hideEchoBack: true, mask: ''});

  console.log()
}

function play(question, answer, rightAnswer, i) {
  var userAnswer = readLine.question(i+1 + ". " + question + "\n-->")

  if(userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green("Great! You're right."))
    score = score + 1
  }
  else {
    console.log(chalk.red("Oops! You're wrong."))
    console.log(chalk.underline.yellowBright(rightAnswer))
  }

  console.log(chalk.bold.blue("Current score: " + score))
  console.log("--------------------")
}

function startGame() {
  for(var i = 0; i < questions.length; i++) {
    play(questions[i].question, questions[i].answer, questions[i].rightAnswer, i)
  }
}

function displayScores() {
  console.log(chalk.bold.green("\nYay! You Scored: " + score))

  console.log("\nCheck out the High Scores, if you should be there ping me and I'll update it...")

  for(var i = 0; i < highScores.length; i++) {
    console.log(chalk.red(highScores[i].name) + " : " + chalk.blue(highScores[i].score))

    if(score > highScores[i].score) {
      console.log("Congrats! You beated " + highScores[i].name + "'s score. Send me a screenshot & I'll update it here.")
    }
  }
}

welcomeUser();
startGame();
displayScores();