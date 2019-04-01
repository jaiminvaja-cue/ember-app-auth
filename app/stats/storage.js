import StorageObject from 'ember-local-storage/session/object';

const Storage = StorageObject.extend();

// Uncomment if you would like to set initialState
Storage.reopenClass({
  initialState() {
    return {
      user: {
        access_token: null,
        refresh_token: null
      }
    };
  }
});

export default Storage;
