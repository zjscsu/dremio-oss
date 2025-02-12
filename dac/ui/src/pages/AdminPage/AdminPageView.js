/*
 * Copyright (C) 2017-2019 Dremio Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

import withFilteredSections from '@inject/pages/AdminPage/withFilteredSections';

import SettingPage from '@app/containers/SettingPage';
import UserNavigation from '@app/components/UserNavigation';
import MainHeader from 'components/MainHeader';
import { navigationSection, getTitle } from '@inject/pages/AdminPage/navSections';

import './AdminPage.less'; // TODO to Vasyl, need to use Radium for each child component

@Radium
class AdminPageView extends PureComponent {
  static propTypes = {
    sections: PropTypes.arrayOf(PropTypes.object),
    children: PropTypes.node,
    routeParams: PropTypes.object,
    location: PropTypes.object.isRequired,
    style: PropTypes.object
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { location, style, children, sections } = this.props;
    return (
      <SettingPage id='admin-page' style={style}>
        <MainHeader />
        <div className='page-content'>
          <UserNavigation
            title={getTitle()}
            sections={sections}
            location={location}
            navigationSection={navigationSection}
          />
          <div className='main-content'>
            {children}
          </div>
        </div>
      </SettingPage>
    );
  }
}

export default withFilteredSections(AdminPageView);
