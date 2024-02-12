# React text modal component

## Installation
You can use this package with `create-react-app`.
To install the react-text-modal-component package, use npm (Node Package Manager) by running the following command:

bash
### `npm install react-text-modal-component`


## Minimum Node.js Version
The minimum Node.js version required to use this package is Node.js 10.x or higher.


## Description
The React package react-text-modal-component makes it easy to display modals with simple text in web applications. This library provides a simple interface for displaying a modal with customized content, providing developers with a tool to easily display messages, warnings, or other important information.


## Usage

### Package
The package provides the Modal component to be used in a parent component with three props.
This is an example to use it : 

import Modal from 'react-text-modal-component/dist/Modal'

 <Modal isOpen={isOpen} handleClose={closeModal}>Employee created !</Modal>

### Props 
Here is a table defining the props `isOpen`, `handleClose`, and `children`, indicating whether they are required, their function, and their value:

|     Prop     |Required|                Function               |   Value   |
|--------------|--------|---------------------------------------|-----------|
| isOpen       | Yes    | Controls the visibility of the  modal | Boolean   | 
| handleClose  | Yes    | Closes the modal                      | Function  |                              
| children     | Yes    | Displays text                         | String    |