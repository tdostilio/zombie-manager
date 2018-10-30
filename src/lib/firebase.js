import * as firebase from "firebase"
import "firebase/firestore"

const config = {
  //put config information here
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
    await this.database.ref(`${location}/zombies/${zombId}/`).remove()
  }

  moveZombie = async (newLocation, zombie) => {
    //create zombie in new location
    this.zombieId = await this.database.ref(
      `${newLocation}/zombies/${zombie.id}`
    )
    this.zombieId.set({
      id: zombie.id,
      name: zombie.name,
      gender: zombie.gender,
      location: newLocation
    })
    //delete zombie from old location
    this.deleteZombie(zombie.location, zombie.id)
  }

  locationRef = location => this.database.ref(`${location}/zombies`)

  countTotalZombies = async () => {
    await this.database.ref("zombieTotal").on("value", snapshot => {
      return snapshot.val()
    })
  }
}

export default FirebaseClient
