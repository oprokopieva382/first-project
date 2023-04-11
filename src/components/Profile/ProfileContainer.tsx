import axios from "axios";
import React from "react";
import Profile from "./Profile";
import { ProfileUserPageType } from "../../redux/state";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profilePageReducer";
import { RootStateType } from "../../redux/reduxStore";
import { RouteComponentProps, withRouter } from "react-router-dom";

type MapDispatchToPropsType = {
  setUserProfile: (profile: ProfileUserPageType) => void;
};
type MapStateToPropsType = {
  profile: ProfileUserPageType | null;
};
type PathParamsType = {
  userId: string;
};

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType;
type OwnPropsType = MapDispatchToPropsType & MapStateToPropsType;

class ProfileContainer extends React.Component<PropsType> {
  componentDidMount(): void {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = "26800";
    }
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then((res) => {
        this.props.setUserProfile(res.data);
      });
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state: RootStateType): MapStateToPropsType => {
  return {
    profile: state.profilePage.profile,
  };
};

let WithUrlDataContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(
  WithUrlDataContainer
);
