import { connect } from "react-redux";
import LoginFormComponent from "../components/LoginForm";
import { loginSubmit } from "../actions";

function mapStateToProps(state) {
	return {
		error: state.login.error
	};
}

const mapDispatchToProps = dispatch => ({
	dispatch: inputNickname => {
		dispatch(loginSubmit(inputNickname));
	}
});

export const LoginForm = connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginFormComponent);
