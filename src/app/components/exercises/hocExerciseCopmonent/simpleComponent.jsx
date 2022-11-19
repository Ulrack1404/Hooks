import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    return (
        <button
            onClick={isAuth ? onLogOut : onLogin}
            className="btn btn-primary"
        >
            {isAuth ? "Выйти из системы" : "Войти"}
        </button>
    );
};
SimpleComponent.propTypes = {
    isAuth: PropTypes.string,
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func
};

export default SimpleComponent;
