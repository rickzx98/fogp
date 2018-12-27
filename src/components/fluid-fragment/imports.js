import { TYPE_CREATE_FRAGMENT } from "../../actions/FluidFragmentActionTypes";
import _FragmentContainer from "./fragment-container/FragmentContainerComponent";
import _PropTypes from "prop-types";
import _React from "react";

export { bindActionCreators } from "redux";
export { connect } from "react-redux";

export const React = _React;
export const FluidFragmentActionTypes = { TYPE_CREATE_FRAGMENT };
export const PropTypes = _PropTypes;
export const FragmentContainer = _FragmentContainer;