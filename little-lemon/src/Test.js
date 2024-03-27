import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("FIND YOUR TABLE");
    expect(headingElement).toBeInTheDocument();
})

test('initializeTimes returns the correct expected value and updateTimes returns the same value that is provided in the state', () => {
    const mockAvailableTimes = ['17:00', '18:00', '19:00'];

  it('Call updateTimes with selected date when handleDateChange is called', () => {
    const mockUpdateTimes = jest.fn();

    const { getByLabelText } = render(
      <BookingForm availableTimes={mockAvailableTimes} updateTimes={mockUpdateTimes} />
    );

    fireEvent.change(getByLabelText('Choose date'), { target: { value: '2024-03-25' } });

    expect(mockUpdateTimes).toHaveBeenCalledWith('2024-03-25');
  });

  it('Return the same value that is provided in the state when updateTimes is called', () => {
    const initialState = '2024-03-25';

    const { getByLabelText } = render(
      <BookingForm availableTimes={mockAvailableTimes} updateTimes={() => {}} />
    );

    fireEvent.change(getByLabelText('Choose date'), { target: { value: initialState } });

    const selectedDate = getByLabelText('Choose date').value;

    expect(selectedDate).toEqual(initialState);
  });
});