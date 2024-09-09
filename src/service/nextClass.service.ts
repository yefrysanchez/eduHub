export function getNextClassDate(): string {

    const nextClassDay = 1; // Monday (0 is Sunday, 1 is Monday, etc.)
  
    const today = new Date();
    const currentDay = today.getDay();
    const daysUntilNextClass = (nextClassDay - currentDay + 7) % 7;
    
    // If today is the same day as the next class, schedule for the following week
    const nextClassDate = new Date(today);
    nextClassDate.setDate(today.getDate() + (daysUntilNextClass || 7));
    
    const options: Intl.DateTimeFormatOptions = { weekday: 'short', month: 'short', day: 'numeric' };
    return nextClassDate.toLocaleDateString('en-US', options);
  }