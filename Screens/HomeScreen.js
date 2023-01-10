import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import MyIcons from 'react-native-vector-icons/Feather';
import MyIcons2 from 'react-native-vector-icons/AntDesign';
import MyIcons3 from 'react-native-vector-icons/EvilIcons';

const MyTeam = [
  {Name: 'Rashmi', Designation: 'Trainee', Status: 'Present'},
  {Name: 'Manisha', Designation: 'HR', Status: 'Present'},
  {Name: 'Abhishek', Designation: 'Developer', Status: 'Present'},
  {Name: 'Aditya', Designation: 'Trainee', Status: 'Absent'},
  {Name: 'Neeraj', Designation: 'HR', Status: 'Present'},
];
const Celebrations = [
  {
    empName: 'Shubham',
    empImg: require('../src/images/anime.png'),
    empEvent: 'Birthday',
  },
  {
    empName: 'Yash',
    empImg: require('../src/images/anime.png'),
    empEvent: 'Marrege',
  },
  {
    empName: 'Riku',
    empImg: require('../src/images/anime.png'),
    empEvent: 'Work Anniversary',
  },
  {
    empName: 'Priyank',
    empImg: require('../src/images/anime.png'),
    empEvent: "Kid's Birthday",
  },
];

const bgColor = [
  {bg: '#f9f2c7', border: '#f2ce82'},
  {bg: '#E9F8FE', border: '#BFE9FB'},
  {bg: '#FCEBEF', border: '#F7C7D3'},
];

const employeList = [
  {
    empName: 'Sahil',
    empImg: require('../src/images/anime.png'),
    empDesignation: 'UX Designer',
    joinDate: 'Today',
  },
  {
    empName: 'Mega',
    empImg: require('../src/images/anime.png'),
    empDesignation: 'UX Designer',
    joinDate: 'Today',
  },
  {
    empName: 'Ravi',
    empImg: require('../src/images/anime.png'),
    empDesignation: 'UX Designer',
    joinDate: 'Today',
  },
];
const HomeScreen = () => {
  const _getRandomColor = index => {
    let item = '';
    let tempIndex;
    if (index < bgColor.length) {
      item = bgColor[index];
    } else {
      tempIndex = index % bgColor.length;
      item = bgColor[tempIndex];
    }
    return item;
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={styles.headerStyle}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#fff',
                width: '70%',
                height: 30,
                borderRadius: 6,
                alignItems: 'center',
                marginLeft: 45,
                marginTop: 36,
              }}>
              <MyIcons style={{marginLeft: 8}} name="search" size={16} />
              <TextInput
                style={{marginLeft: 10, color: '#000'}}
                placeholder="Search"
              />
            </View>
            <MyIcons
              style={{marginLeft: 8, marginTop: 36}}
              name="message-circle"
              color={'green'}
              size={26}
            />
          </View>
          <View
            style={{
              marginTop: 40,
              marginRight: 12,
              marginLeft: 12,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontWeight: 'bold'}}>Announcements</Text>
            <TouchableOpacity>
              <Text
                style={{
                  color: 'green',
                  textDecorationLine: 'underline',
                }}>
                View All
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: 36,
              marginLeft: 8,
              marginRight: 8,
              marginBottom: 26,
              backgroundColor: '#c4ae75',
              padding: 16,
              borderRadius: 15,
              flexDirection: 'row',
            }}>
            <View
              style={{
                backgroundColor: 'yellow',
                justifyContent: 'center',
                borderRadius: 5,
                width: 36,
                height: 36,
                alignItems: 'center',
              }}>
              <MyIcons2
                style={{}}
                name="clockcircleo"
                color={'red'}
                size={18}
              />
            </View>
            <View style={{marginLeft: 10}}>
              <Text style={{fontSize: 14}}>
                Employees Are Expected To Clock...
              </Text>
              <Text style={{fontSize: 12, fontWeight: '300'}}>1 hour ago</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#d6d1d1',
            marginTop: 7,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            padding: 10,
          }}>
          <Text style={{padding: 20, alignSelf: 'center'}}>Welcome</Text>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            {employeList.map((data, index) => {
              return (
                <View
                  key={index.toString()}
                  style={{
                    backgroundColor: _getRandomColor(index).bg,
                    borderRadius: 20,
                    width: 115,
                    height: 145,
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 10,
                    borderWidth: 1,
                    borderColor: _getRandomColor(index).border,
                  }}>
                  <View
                    style={styles.welcomeContainerStyle(
                      _getRandomColor(index).border,
                    )}>
                    <Image
                      style={{width: 40, height: 45}}
                      source={data.empImg}
                    />
                  </View>
                  <View style={{marginTop: 10}}>
                    <Text
                      style={{
                        fontSize: 16,
                        color: _getRandomColor(index).border,
                        textAlign: 'center',
                        fontWeight: 'bold',
                      }}>
                      {data.empName}
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: '300',
                        textAlign: 'center',
                      }}>
                      {data.empDesignation}
                    </Text>
                    <Text
                      style={{
                        fontSize: 11,
                        fontWeight: '300',
                        textAlign: 'center',
                      }}>
                      Joined {data.joinDate}
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#E9F8FE',
            padding: 10,
            marginTop: 20,
            width: '90%',
            alignSelf: 'center',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: 15,
            flexDirection: 'row',
          }}>
          <View
            style={{
              backgroundColor: '#3089C8',
              borderRadius: 15,
              paddingBottom: 2,
              paddingTop: 2,
            }}>
            <MyIcons3 style={{}} name="clock" color={'#fff'} size={28} />
          </View>
          <View>
            <Text>03/01/23</Text>
            <Text>Clock In-hh:mm AM</Text>
            <Text>Clock Out-hh:mm PM</Text>
          </View>
          <View
            style={{backgroundColor: '#3089C8', padding: 3, borderRadius: 10}}>
            <Text
              style={{
                marginLeft: 10,
                marginRight: 10,
                padding: 2,
                color: '#fff',
              }}>
              Clock In
            </Text>
          </View>
          <View>
            <MyIcons2 style={{}} name="right" size={18} />
          </View>
        </View>
        <View
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.3,
            shadowRadius: 4.65,
            elevation: 8,
            width: '94%',
            height: 140,
            alignSelf: 'center',
            backgroundColor: '#fff',
            marginTop: 10,
            borderRadius: 10,
            paddingLeft: 10,
          }}>
          <Text
            style={{
              marginTop: 24,
              marginBottom: 28,
              marginLeft: 10,
              fontStyle: 'normal',
              fontWeight: 'bold',
            }}>
            Quick Links
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingLeft: 8,
              paddingRight: 8,
            }}>
            <View style={styles.quickLinksStyle}>
              <View
                style={{
                  marginLeft: 10,
                  justifyContent: 'center',
                }}>
                <Text>Holiday</Text>
                <Text>Calender</Text>
              </View>
              <MyIcons
                style={{position: 'absolute', top: 0, right: 0}}
                name="arrow-up-right"
                size={16}
              />
            </View>
            <View style={styles.quickLinksStyle}>
              <View
                style={{
                  marginLeft: 18,
                }}>
                <Text>Leave</Text>
                <Text>Policy</Text>
              </View>
              <MyIcons
                style={{position: 'absolute', top: 0, right: 0}}
                name="arrow-up-right"
                size={16}
              />
            </View>
            <View style={styles.quickLinksStyle}>
              <View
                style={{
                  marginLeft: 16,
                }}>
                <Text>Payroll </Text>
                <Text>manual</Text>
              </View>
              <MyIcons
                style={{position: 'absolute', top: 0, right: 0}}
                name="arrow-up-right"
                size={16}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.5,
            shadowRadius: 4.65,
            elevation: 8,
            width: '94%',
            height: 430,
            alignSelf: 'center',
            backgroundColor: '#fff',
            marginTop: 10,
            marginBottom: 20,
            borderRadius: 10,
            padding: 10,
          }}>
          <Text
            style={{
              marginBottom: 28,
              fontStyle: 'normal',
              fontWeight: 'bold',
              marginLeft: 5,
              marginTop: 10,
            }}>
            Celebrations
          </Text>

          <View
            style={{
              backgroundColor: '#C1F1CA',
              padding: 10,
              height: 60,
              borderRadius: 15,
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View
                style={{
                  height: 40,
                  backgroundColor: '#C1F1CA',
                  width: '30%',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 16,
                  }}>
                  Birthday
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: '#C1F1CA',
                  width: 80,
                  height: 80,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 40,
                  marginTop: -19,
                }}>
                <Image
                  style={{width: 40, height: 45}}
                  source={require('../src/images/anime.png')}
                />
              </View>

              <View
                style={{
                  height: 40,
                  backgroundColor: '#C1F1CA',
                  width: '40%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: 18, color: '#50B052'}}>Shubham</Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  marginRight: -10,
                  marginTop: -22,
                }}>
                <MyIcons2 style={{}} name="right" size={22} />
              </View>
            </View>
          </View>

          <View
            style={{
              backgroundColor: '#C4EBFC',
              padding: 10,
              height: 60,
              borderRadius: 15,
              marginTop: 30,
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View
                style={{
                  height: 40,
                  backgroundColor: '#C4EBFC',
                  width: '30%',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 16,
                  }}>
                  Marrage
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                  }}>
                  Anniversary
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: '#C4EBFC',
                  width: 80,
                  height: 80,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 40,
                  marginTop: -19,
                }}>
                <Image
                  style={{width: 40, height: 45}}
                  source={require('../src/images/anime.png')}
                />
              </View>

              <View
                style={{
                  height: 40,
                  backgroundColor: '#C4EBFC',
                  width: '40%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: 18, color: '#3187BD'}}>Yash</Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  marginRight: -10,
                  marginTop: -22,
                }}>
                <MyIcons2 style={{}} name="right" size={22} />
              </View>
            </View>
          </View>

          <View
            style={{
              backgroundColor: '#DBD2FB',
              padding: 10,
              height: 60,
              borderRadius: 15,
              marginTop: 30,
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View
                style={{
                  height: 40,
                  backgroundColor: '#DBD2FB',
                  width: '30%',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 16,
                  }}>
                  Work
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                  }}>
                  Anniversary
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: '#DBD2FB',
                  width: 80,
                  height: 80,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 40,
                  marginTop: -19,
                }}>
                <Image
                  style={{width: 40, height: 45}}
                  source={require('../src/images/anime.png')}
                />
              </View>

              <View
                style={{
                  height: 40,
                  backgroundColor: '#DBD2FB',
                  width: '40%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: 18, color: '#262489'}}>Riku</Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  marginRight: -10,
                  marginTop: -22,
                }}>
                <MyIcons2 style={{}} name="right" size={22} />
              </View>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#FAD6A0',
              padding: 10,
              height: 60,
              borderRadius: 15,
              marginTop: 30,
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View
                style={{
                  height: 40,
                  backgroundColor: '#FAD6A0',
                  width: '30%',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 16,
                  }}>
                  Kid's
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                  }}>
                  Birthday
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: '#FAD6A0',
                  width: 80,
                  height: 80,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 40,
                  marginTop: -19,
                }}>
                <Image
                  style={{width: 40, height: 45}}
                  source={require('../src/images/anime.png')}
                />
              </View>

              <View
                style={{
                  height: 40,
                  backgroundColor: '#FAD6A0',
                  width: '40%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: 18, color: '#b4722c'}}>Priyank</Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  marginRight: -10,
                  marginTop: -22,
                }}>
                <MyIcons2 style={{}} name="right" size={22} />
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.5,
            shadowRadius: 4.65,
            elevation: 8,
            width: '94%',
            height: 375,
            alignSelf: 'center',
            backgroundColor: '#fff',
            marginTop: 10,
            marginBottom: 20,
            borderRadius: 10,
            paddingLeft: 10,
          }}>
          <Text
            style={{
              marginTop: 24,
              marginBottom: 28,
              marginLeft: 10,
              fontStyle: 'normal',
              fontWeight: 'bold',
            }}>
            My Tasks
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '92%',
              height: 67,
              borderColor: '#DCD3FB',
              borderWidth: 2,
              borderRadius: 15,
              marginLeft: 8,
            }}>
            <Text style={{marginLeft: 10}}>Attandence</Text>
            <Text style={{marginLeft: 88}}>17</Text>
            <Text
              style={{
                color: 'green',
                textDecorationLine: 'underline',
                marginLeft: 55,
              }}>
              View
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '92%',
              marginLeft: 8,
              height: 67,
              borderColor: '#DCD3FB',
              borderWidth: 2,
              borderRadius: 15,
              marginTop: 5,
            }}>
            <Text style={{marginLeft: 10}}>Leave</Text>
            <Text style={{marginLeft: 128}}>8</Text>
            <Text
              style={{
                color: 'green',
                textDecorationLine: 'underline',
                marginLeft: 55,
              }}>
              View
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '92%',
              marginLeft: 8,
              height: 67,
              borderColor: '#DCD3FB',
              borderWidth: 2,
              borderRadius: 15,
              marginTop: 5,
            }}>
            <Text style={{marginLeft: 10}}>Job Offers</Text>
            <Text style={{marginLeft: 94}}>11</Text>
            <Text
              style={{
                color: 'green',
                textDecorationLine: 'underline',
                marginLeft: 55,
              }}>
              View
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '92%',
              marginLeft: 8,
              height: 67,
              borderColor: '#DCD3FB',
              borderWidth: 2,
              borderRadius: 15,
              marginTop: 5,
            }}>
            <Text style={{marginLeft: 10}}>Interview Schedule</Text>
            <Text style={{marginLeft: 43}}>4</Text>
            <Text
              style={{
                color: 'green',
                textDecorationLine: 'underline',
                marginLeft: 55,
              }}>
              View
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  headerStyle: {
    padding: 10,
    backgroundColor: '#d6d1d1',
  },
  welcomeContainerStyle: color => ({
    backgroundColor: color,
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  }),
  quickLinksStyle: {
    backgroundColor: '#DEF6FA',
    width: 85,
    height: 50,
    alignItems: 'center',
    alignContent: 'center',
    borderRadius: 5,
    flexDirection: 'row',
  },
});
export default HomeScreen;
