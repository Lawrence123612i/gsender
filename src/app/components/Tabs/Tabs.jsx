/*
 * Copyright (C) 2021 Sienci Labs Inc.
 *
 * This file is part of gSender.
 *
 * gSender is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, under version 3 of the License.
 *
 * gSender is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with gSender.  If not, see <https://www.gnu.org/licenses/>.
 *
 * Contact for information regarding this program and its license
 * can be sent through gSender@sienci.com or mailed to the main office
 * of Sienci Labs Inc. in Waterloo, Ontario, Canada.
 *
 */

import classNames from 'classnames';
import React from 'react';
import TabWrapper from 'rc-tabs';
import WidgetStyles from '../Widget/index.styl';
import styles from './index.styl';
import './tabs.css';

const Tabs = ({ borderless, fullscreen, tabs, activeTabIndex, onClick, onFork, onRemove, sortable, embedded, isMainWindow, ...props }) => {
    console.log(fullscreen);
    const tabInfo = tabs.map((tab, index) => {
        return {
            key: index.toString(),
            name: tab.label,
            // content: `Content of ${index}`,
            content:
                <div
                    className={classNames(
                        styles.tabChild,
                        { [styles.notActive]: index !== activeTabIndex }
                    )}
                >
                    <tab.component
                        onFork={onFork}
                        onRemove={onRemove}
                        sortable={sortable}
                        widgetId={tab.widgetId}
                        embedded={embedded}
                        active={index === activeTabIndex}
                        isMainWindow={isMainWindow}
                    />
                </div>
        };
    });

    return (
        <div
            className={classNames(
                WidgetStyles.widget,
                { [WidgetStyles.widgetBorderless]: borderless },
                { [WidgetStyles.widgetFullscreen]: fullscreen },
                // styles.tabContent
                styles.tabContainer
            )}
        >
            <TabWrapper
                {...props}
                className={styles.tabContent}
                moreIcon="..."
                activeKey={`${activeTabIndex}`}
                onChange={(key) => onClick(Number(key))}
                // defaultActiveKey="0"
                items={tabInfo.map(({ key, name, content }) => ({
                    key,
                    label: name,
                    children: content,
                }))}
                tabBarStyle={{
                    backgroundColor: '#d1d5db',
                    position: 'relative',
                    // display: 'block',
                    // display: 'flex',
                    // height: '1.9rem',
                    // justifyContent: 'space-between',
                    // flexDirection: 'row',
                    alignContent: 'center',
                    textAlign: 'center',
                    // fontSize: '2rem'

                    // &:before, &:after {
                    //     content: 'none !important',
                    // }
                }}
                // [WidgetStyles.widgetHeader, styles.tabRow].join(' ')}
            />
        </div>
    );
};

export default Tabs;
