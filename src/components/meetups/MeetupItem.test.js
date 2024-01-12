import { shallow } from "enzyme";
import MeetupItem from "./MeetupItem";
import { FavoritesContextProvider } from "../../context/FavoritesContext";
import { useFetch } from "./../../util-hooks/useFetch";

jest.mock("./../../util-hooks/useFetch");

describe("<MeetupItem/>", () => {
  test("renders with data", () => {
    useFetch.mockReturnValue({ data: [{ id: 1, title: 'Meetupstreet 5,', address: '12345 Meetup City' }] });

    const wrapper = shallow(
      <FavoritesContextProvider>
        <MeetupItem />
      </FavoritesContextProvider>
    );
    expect(wrapper.exists()).toBe(true);
  });

  test("renders loading state", () => {
    useFetch.mockReturnValue({ data: null });

    const wrapper = shallow(
      <FavoritesContextProvider>
        <MeetupItem />
      </FavoritesContextProvider>
    );
    expect(wrapper.text()).toBe("Loading...");
  });

  test("renders error state", () => {
    useFetch.mockReturnValue({ error: 'Error fetching data' });

    const wrapper = shallow(
      <FavoritesContextProvider>
        <MeetupItem />
      </FavoritesContextProvider>
    );
    expect(wrapper.text()).toBe("Error fetching data");
  });
});
