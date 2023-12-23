import "./css/ContactsPage.css";
function ContactsPage() {
  return (
    <div className="contact_page">
      <div className="contact_container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2503.862619259292!2d71.41300847657648!3d51.129442038243965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z0LMuINCQ0YHRgtCw0L3QsCwg0YDQsNC50L7QvSDQldGB0LjQu9GMLCDQv9GALtCi0rHRgNCw0L0sINC30LTQsNC90LjQtSA0OQ!5e0!3m2!1sru!2skz!4v1702651104107!5m2!1sru!2skz"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>{" "}
        <div className="contact_info ">
          <h4>Наши контакты</h4>
          <h5>г. Астана, район Есиль, пр.Тұран, здание 49</h5> <br />
          <h5 className="footer_phone">+7 (707)-736-98-78</h5> <br />
          <h5>
            ciei2022@mail.ru <br /> centerciei.edu@gmail.com
          </h5>
        </div>
      </div>
    </div>
  );
}
export default ContactsPage;
