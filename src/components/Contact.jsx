import React from 'react';

class Contact extends React.Component {
  render() {
    const { data: contact } = this.props;
    // const admissionDate = new Date(contact.admissionDate).toLocaleDateString();

    const formatDate = new Intl.DateTimeFormat('pt-BR', { year: 'numeric', month: '2-digit', day: '2-digit' });
    const [{ value: yyyy },,{ value: mm },,{ value: dd }] = formatDate.formatToParts(new Date(contact.admissionDate));

    return (
      <article className="contact" data-testid="contact">
          <img className="contact__avatar" src={contact.avatar} alt={contact.name} />
          <span className="contact__data" data-testid="contact-name">{contact.name}</span>
          <span className="contact__data" data-testid="contact-phone">{contact.phone}</span>
          <span className="contact__data" data-testid="contact-country">{contact.country}</span>
          <span className="contact__data" data-testid="contact-date">{`${dd}/${mm}/${yyyy}`}</span>
          <span className="contact__data" data-testid="contact-company">{contact.company}</span>
          <span className="contact__data" data-testid="contact-department">{contact.department}</span>
      </article>
    );
  }
}

export default Contact;
