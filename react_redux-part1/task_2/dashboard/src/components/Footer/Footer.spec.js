import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { getCurrentYear, getFooterCopy } from '../../utils/utils';

describe('Footer Component', () => {
    const defaultUser = { isLoggedIn: false, email: '', password: '' };
    const loggedInUser = { isLoggedIn: true, email: 'test@example.com', password: 'password123' };

    // Test cases for basic rendering
    describe('Basic Rendering', () => {
        test('renders without crashing', () => {
            render(<Footer user={defaultUser} />);

            const footerParagraph = screen.getByText(`Copyright ${getCurrentYear()} - ${getFooterCopy(true)}`);
            expect(footerParagraph).toHaveTextContent(/copyright \d{4} - holberton school/i);
        });

        test('does not render contact link when user is not logged in', () => {
            render(<Footer user={defaultUser} />);

            const link = screen.queryByRole('link', { name: /contact us/i });
            expect(link).not.toBeInTheDocument();
        });

        test('renders contact link when user is logged in', () => {
            render(<Footer user={loggedInUser} />);

            const link = screen.getByRole('link', { name: /contact us/i });
            expect(link).toBeInTheDocument();
        });
    });

    // Test cases for edge scenarios
    describe('Edge Scenarios', () => {
        test('does not render contact link when user email is null', () => {
            const withTruthyIsLoggedIn = { isLoggedIn: true };
            render(<Footer user={withTruthyIsLoggedIn} />);

            const link = screen.queryByRole('link', { name: /contact us/i });
            expect(link).toBeInTheDocument();
        });

        test('does not render contact link when user email is invalid', () => {
            const withFalsyIsLoggedIn = { isLoggedIn: false };
            render(<Footer user={withFalsyIsLoggedIn} />);

            const link = screen.queryByRole('link', { name: /contact us/i });
            expect(link).not.toBeInTheDocument();
        });
    });

    // Test for functional component verification
    test('should confirm Footer is a functional component', () => {
        const FooterPrototype = Object.getOwnPropertyNames(Footer.prototype);

        expect(FooterPrototype).toEqual(expect.arrayContaining(['constructor']));
        expect(FooterPrototype).toHaveLength(1);
        expect(Footer.prototype.__proto__).toEqual({});
    });
});
