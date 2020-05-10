import React from "react";
import { SectionList, Text } from "react-native";
import PropTypes from "prop-types";
import Rows from "./row";

//item={name:String, phone:String}
//const renderItem = obj => <Rows name={obj.item.name} phone={obj.item.phone} />;

const renderSectionHeader = (obj) => <Text>{obj.section.title}</Text>;

const ContactList = (props) => {
  const renderItem = (obj) => (
    <Rows name={obj.item.name} phone={obj.item.phone}
    onSelectContact={props.onSelectContact} />
  );

  const contactsByLetter = props.contacts.reduce((obj, contact) => {
    const firstLetter = contact.name[0].toUpperCase();
    return {
      ...obj,
      [firstLetter]: [...(obj[firstLetter] || []), contact],
    };
  }, {});

  const sections = Object.keys(contactsByLetter)
    .sort()
    .map((letter) => ({
      title: letter,
      data: contactsByLetter[letter],
    }));

  return (
    <SectionList
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
      sections={sections}
    />
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
};

export default ContactList;
