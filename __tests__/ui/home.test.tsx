import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// Mock the API function
// jest.mock("./api", () => ({
//   getAllTeachers: jest.fn(),
// }));

import { Header, Sidebar, Modal, TeacherActive } from "@/components";

//  1 TEST
describe("Header Component", () => {
  test("page has correct heading", () => {
    render(<Header />);

    const image = screen.getByRole("img", {
      name: "student teacher",
    });
    expect(image).toBeInTheDocument();

    const btn1 = screen.getByRole("button", {
      name: "Open main menu IN",
    });
    expect(btn1).toBeInTheDocument();

    const btn2 = screen.getByRole("button", {
      name: "EE Emeka E",
    });
    expect(btn2).toBeInTheDocument();
  });
});

// 4 TEST
describe("Sidebar Component", () => {
  it("renders correctly", () => {
    const { container } = render(<Sidebar activeTab="Teacher" />);
    expect(container).toBeInTheDocument();
  });

  it("highlights active tab correctly", () => {
    const { getByText } = render(<Sidebar activeTab="Teacher" />);
    const activeTabElement = getByText("Users");
    expect(activeTabElement).toHaveClass("text-blue-800");
  });

  it("doesn't highlight inactive tab", () => {
    const { getByText } = render(<Sidebar activeTab="Dashboard" />);
    const inactiveTabElement = getByText("Users");
    expect(inactiveTabElement).not.toHaveClass("text-blue-800");
  });

  it("triggers handleTabClick when clicked", () => {
    const handleTabClick = jest.fn();
    const { getByText } = render(
      <Sidebar activeTab="Teacher" handleTabClick={handleTabClick} />
    );
    const tabElement = getByText("Users");
    fireEvent.click(tabElement);
    expect(handleTabClick).toHaveBeenCalledTimes(1);
  });
});

// 2 TEST
describe("Modal Component", () => {
  it("displays age validation error correctly", async () => {
    const { getByLabelText, getByText } = render(
      <Modal
        replyHasBeenSent={jest.fn()}
        setshowModal={jest.fn()}
        iTab="Student"
        individual={[]}
        setIndividual={jest.fn()}
        fetchedStudent={[]}
        setFetchedStudent={jest.fn()}
      />
    );

    // Find the Date of Birth input field
    const dobInput = getByLabelText("Student Date of Birth *");

    // Simulate entering an invalid birthdate (more than 22 years ago)
    fireEvent.change(dobInput, { target: { value: "2000-01-01" } });

    // Find and click the "Save" button
    const saveButton = getByText("Save");
    fireEvent.click(saveButton);

    // Wait for the validation error message to appear
    await waitFor(() => {
      const errorMessage = getByText("Their age may not be more than 22");
      expect(errorMessage).toBeInTheDocument();
    });
  });

  it("triggers form submission correctly", async () => {
    const { getByLabelText, getByText } = render(<Modal iTab="Student" />);

    // Fill out the form inputs
    fireEvent.change(getByLabelText("Firstname *"), {
      target: { value: "John" },
    });
    fireEvent.change(getByLabelText("Surname *"), { target: { value: "Doe" } });
    fireEvent.change(getByLabelText("National ID Number *"), {
      target: { value: "123456" },
    });
    fireEvent.change(getByLabelText("Student Date of Birth *"), {
      target: { value: "1990-01-01" },
    });
    fireEvent.change(getByLabelText("Student Number *"), {
      target: { value: "S123" },
    });

    // Trigger the form submission
    fireEvent.click(getByText("Save"));

    // Wait for asynchronous actions (you might need to adjust this timeout based on your actual component behavior)
    await new Promise((r) => setTimeout(r, 1000));

    // Assert that the form submission has been triggered, for example by checking if a success message is displayed
    // const successMessage = getByText("added successfully"); // Replace with the actual success message text in your component
    // expect(successMessage).not.toBeInTheDocument();
  });

  it("displays processing message during submission", async () => {
    // ... (simulate form submission and check for processing message)
  });

  // ... other tests for specific components or functionalities
});

// describe('TeacherActive Component', () => {
//   it('renders loading state correctly', async () => {
//     // Mock API to return loading state
//     const { container } = render(<TeacherActive isFetching={true} />);

//     // Check if loader is displayed
//     const loader = container.querySelector('.custom-loader');
//     expect(loader).toBeInTheDocument();
//   });

//   it('renders data correctly', async () => {
//     // Mock API to return data
//     const mockData:any = [
//       // Mock data objects here
//     ];
//     getAllTeachers.mockResolvedValueOnce({ data: { results: mockData } });

//     render(<TeacherActive isFetching={false} individual={mockData} />);

//     // Check if data is displayed correctly in the table
//     const rowData = screen.getByText(mockData[0].NationalID);
//     expect(rowData).toBeInTheDocument();
//   });

//   it('handles API error correctly', async () => {
//     // Mock API to return an error
//     getAllTeachers.mockRejectedValueOnce(new Error('API Error'));

//     render(<TeacherActive isFetching={false} />);

//     // Check if error message is displayed
//     const errorMessage = await screen.findByText('Oops! Something went wrong.');
//     expect(errorMessage).toBeInTheDocument();
//   });

//   // Add more tests for other scenarios (pagination, sorting, etc.) as needed.
// });
