import React, {Component} from 'react';
import iconEdit from '../img/icon_edit.svg';
import iconDelete from '../img/icon_delete.svg';

class ContactList extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return(
            <table className="u-full-width">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Telephone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Lucas Sandes</td>
                        <td>26</td>
                        <td>lucassandes@email.com</td>
                        <td>+ 55 (12) 98123-4567</td>
                        <td>
                            <button><img src={iconEdit}   alt="edit" /></button>
                            <button><img src={iconDelete} alt="delete" /></button>
                        </td>
                    </tr>
                </tbody>
            </table>
           
        );
    }
}

export default ContactList;