const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({

  name: String,
  address: String,
  cpf: Number,
  rg: Number,
  email: String,
  phone: Number,


}, { timestamps: true, static: false });
const ClientModel = mongoose.model('Client', clientSchema);

class Client {
  /**
   * Get all Users from database
   * @returns {Array} Array of Users
   */
  static getAll() {
    return new Promise((resolve, reject) => {
      ClientModel.find({}).exec().then((results) => {
        resolve(results);
      }).catch((err) => {
        reject(err);
      });
    });
  }

  /**
   * Get a User by it's id
   * @param {string} id - User Id
   * @returns {Object} - User Document Data
   */
  static getById(id) {
    return new Promise((resolve, reject) => {
      ClientModel.findById(id).exec().then((result) => {
        resolve(result);
      }).catch((err) => {
        reject(err);
      });
    });
  }

  /**
   * Create a new User
   * @param {Object} client - User Document Data
   * @returns {string} - New User Id
   */
  static create(client) {
    return new Promise((resolve, reject) => {
      ClientModel.create(client).then((result) => {
        resolve(result._id);
      }).catch((err) => {
        reject(err);
      });
    });
  }

  /**
   * Update a User
   * @param {string} id - User Id
   * @param {Object} Client - User Document Data
   * @returns {null}
   */
  static update(id, user) {
    return new Promise((resolve, reject) => {
      UserModel.findByIdAndUpdate(id, client).then(() => {
        resolve();
      }).catch((err) => {
        reject(err);
      });
    });
  }


  }
  module.exports = Client;
