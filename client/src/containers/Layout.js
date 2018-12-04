import { connect } from "react-redux";
import LayoutComponent from "../components/Layout";

function mapStateToProps(state) {
	return {
		currentUser: state.currentUser,
		error: state.error
	};
}

export const Layout = connect(mapStateToProps)(LayoutComponent);
