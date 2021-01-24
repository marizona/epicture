import * as React from "react";
import {
  Text,
  Image,
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Platform,
  ScrollView,
} from "react-native";
import { SearchBar } from "react-native-elements";
import axios from "axios";
// import { ScrollView } from "react-native-gesture-handler";

export const CLIENT_ID = "652b64e9aa10780";

export default class SearchingBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      search: "",
    };
    this.arrayHolder = [];
  }

  fetchData = (galleryText) => {
    axios
      .get(
        `https://api.imgur.com/3/gallery/t/${galleryText}/%7Bsort%7D/%7Bwindow%7D/%7Bpage%7D`,
        {
          headers: {
            Authorization: `Client-ID ${CLIENT_ID}`,
          },
        }
      )
      .then((response) => {
        this.setState(
          {
            ...this.state,
            isLoading: false,
            dataSource: [response.data],
          },
          () => {
            this.arrayHolder = response.data;
          }
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  componentDidMount() {
    this.fetchData("cat");
  }

  getLinks = (item) => {
    const pattern = /\.[0-9a-z]+$/i;
    if (item.data.items === undefined) {
      return [];
    }
    const links = item.data.items.slice(0, 20).map((event) => {
      if (event.images !== undefined) {
        return event.images.map((e) => {
          if (e.link.match(pattern)[0] !== ".mp4") {
            return e.link;
          }
        });
      }
    });
    return this.flatArray(links);
  };

  flatArray = (arr) => {
    const result = [];

    arr.forEach((i) => {
      if (i !== undefined) {
        i.forEach((y) => {
          result.push(y);
        });
      }
    });
    return result;
  };

  updateSearch = (search) => {
    if (search === "") {
      this.setState({ ...this.state, dataSource: [response.data] });
    } else {
      this.setState({ search }, () => {
        this.fetchData(search);
      });
    }
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={styles.viewStyle}>
        <SearchBar 
           containerStyle={{backgroundColor: 'white', size:56}}
           iconStyle={{backgroundColor:'#fff'}}
           leftIconContainerStyle={{backgroundColor: 'lightgrey'}}
           inputContainerStyle={{backgroundColor: 'lightgrey'}}
           containerStyle={{
            backgroundColor: 'transparent',
            borderBottomColor: 'transparent',
            borderTopColor: 'transparent',
            }}
          round
          searchIcon={{ size: 30 }}
          onChangeText={this.updateSearch}
          placeholder="Search"
          value={this.state.search}
        />
        <ScrollView style={{ flex: 1, height: 80 }}>
          <FlatList
            contentContainerStyle={{ alignItems: 'center', padding: 20}}
            data={this.state.dataSource}
            ItemSeparatorComponent={this.ListViewItemSeparator}
            renderItem={({ item }) => {
              const links = this.getLinks(item);
              return links.map((event) => {
                if (event !== undefined) {
                  return (
                    <View style={{ flex: 1 }}>
                      <Image
                        style={styles.tinyLogo}
                        source={{ uri: event }}
                        key={Math.floor(Math.random() * 100000)}
                      />
                    </View>
                  );
                }
              });
            }}
            enableEmptySections={true}
            style={{ marginTop: 10 }}
            keyExtractor={(item, index) => index.toString()}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
    marginTop: 100,
    marginTop: Platform.OS == "ios" ? 40 : 0,
  },
  tinyLogo: {
    flex: 1,
    justifyContent: "space-around",
    width: 300,
    height: 300,
    // width: "95%",
    // height: 300,
    margin: 10,
  },
  textStyle: {
    padding: 20,
  },

});
