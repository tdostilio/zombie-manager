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
      gender: gender,
      location
    })
  }

  deleteZombie = async (location, zombId) => {
    //delete zombie logic
    await this.database.ref(`${location}/${zombId}/`).remove()
  }

  moveZombie = async (newLocation, oldLocation, name, gender, id) => {
    //create zombie in new location
    this.zombieId = await this.database.ref(`${newLocation}/zombies`)
    this.zombieId.set({
      [id]: {
        id: id,
        name: name,
        gender: gender,
        location: newLocation
      }
    })
    //delete zombie from old location
    this.deleteZombie(oldLocation, id)
  }

  locationRef = location => this.database.ref(`${location}/zombies`)

  countTotalZombies = async () => {
    await this.database.ref("zombieTotal").on("value", snapshot => {
      return snapshot.val()
    })
  }
}

export default FirebaseClient
