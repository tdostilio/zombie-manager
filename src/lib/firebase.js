import * as firebase from "firebase"
import "firebase/firestore"

const config = {
  apiKey: "AIzaSyCiUAnK_E4ENPPSa7tj4t3Iuv77jw7tF0Y",
  authDomain: "zombie-manager.firebaseapp.com",
  databaseURL: "https://zombie-manager.firebaseio.com",
  projectId: "zombie-manager",
  storageBucket: "zombie-manager.appspot.com",
  messagingSenderId: "771011266484"
}

const fire = firebase.initializeApp(config)

class FirebaseClient {
  constructor() {
    Object.assign(this, {
      database: fire.database()
    })
  }

  createZombie = async (location, name, gender) => {
    //create zombie logic
    this.zombieId = await this.database.ref(`${location}/zombies`).push()
    let id = this.zombieId.getKey()
    this.zombieId.set({
      id,
      name: name,
      gender: gender
    })
  }

  countZombies = async location => {
    this.database.ref(`${location}`).on("value", async snapshot => {
      //count the number of zombies and update the count
      let zombieObject = await snapshot.val()
      console.log(zombieObject)
      let zombieCount = Object.keys(zombieObject).length
      console.log(zombieCount)
      return zombieCount
    })
  }

  countTotalZombies = async () => {
    await this.database.ref("zombieTotal").on("value", snapshot => {
      return snapshot.val()
    })
  }

  moveZombie = async zombId => {
    //move zombie logic
  }

  deleteZombie = async (zombId, location) => {
    //delete zombie logic
    await this.database.ref(`${location}/${zombId}/`).remove()
  }

  deleteQuestion = async questionId => {
    await this.database.ref(`questions/${questionId}/`).remove()
  }

  updateAnsweredQuestions = async (questionId, choice) => {
    this.answered = this.database.ref(`users/${this.userid}/answered/`)
    await this.answered.update({
      [questionId]: choice
    })
  }
}

export default FirebaseClient
