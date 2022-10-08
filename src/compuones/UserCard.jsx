import React from "react";

const Usercard = ({ user, deleteUserById, setUpgradeInfoUser }) => {
  const handleEdit = () => {
    setUpgradeInfoUser(user);
  };

  return (
    <article className="cardUser">
      <div className="circle__user">
        <i class="fa-solid fa-user"></i>
      </div>
      <h2 className="name__User">{`${user.first_name} ${user.last_name}`}</h2>
      <ul className="box__info_user">
        <li>
          {user.email}
          <span>email</span>
        </li>
        <li>
          <i className="fa-solid fa-gift"></i>
          {user.birthday}
          <span>birthday</span>
        </li>
      </ul>
      <div className="line__btn"></div>
      <div className="container__btn__user">
        <button className="btn_user" onClick={() => deleteUserById(user.id)}>
          <i className="fa-solid fa-trash"></i>
        </button>
        {/* <button className="btn_user" id="btn-modal" onClick={handleEdit}>
          <i className="fa-solid fa-user-pen"></i>
        </button> */}
        <input type="checkbox" id="btn-modal"  />
        <label htmlFor="btn-modal" className="btn_user" onClick={handleEdit}>
        <i className="fa-solid fa-user-pen" ></i>
        </label>
      </div>
    </article>
  );
};

export default Usercard;
