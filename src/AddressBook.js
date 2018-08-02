function AddressBook() {

    let contacts = [];
    let initialComplete = false;

    return {
        addContact: function (contact) {
            contacts.push(contact);
        },
        getContact: function (index) {
            return contacts[index];
        },
        deleteContact: function (index) {
            contacts.splice(index, 1);
        },
        getInitialContacts: function (callback) {
            let self = this;
            setTimeout(function () {
                self.initialComplete = true;
                if ( callback )
                    return callback();
            }, 3);
        }
    }

}
