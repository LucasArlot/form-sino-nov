import type { FC, ChangeEvent, KeyboardEvent, RefObject } from 'react';
import { useState, useEffect, useRef } from 'react';
import { COUNTRIES } from '@/data/countries';

// Common cities by country code (popular destinations)
const CITIES_BY_COUNTRY: Record<string, string[]> = {
  FR: [
    'Paris',
    'Lyon',
    'Marseille',
    'Toulouse',
    'Nice',
    'Nantes',
    'Strasbourg',
    'Montpellier',
    'Bordeaux',
    'Lille',
    'Le Havre',
  ],
  US: [
    'New York',
    'Los Angeles',
    'Chicago',
    'Houston',
    'Phoenix',
    'Philadelphia',
    'San Antonio',
    'San Diego',
    'Dallas',
    'San Jose',
    'Miami',
  ],
  GB: [
    'London',
    'Manchester',
    'Birmingham',
    'Glasgow',
    'Liverpool',
    'Leeds',
    'Edinburgh',
    'Bristol',
    'Cardiff',
    'Belfast',
  ],
  DE: [
    'Berlin',
    'Munich',
    'Hamburg',
    'Frankfurt',
    'Cologne',
    'Stuttgart',
    'Düsseldorf',
    'Dortmund',
    'Essen',
    'Leipzig',
  ],
  IT: [
    'Rome',
    'Milan',
    'Naples',
    'Turin',
    'Palermo',
    'Genoa',
    'Bologna',
    'Florence',
    'Bari',
    'Catania',
  ],
  ES: [
    'Madrid',
    'Barcelona',
    'Valencia',
    'Seville',
    'Zaragoza',
    'Málaga',
    'Murcia',
    'Palma',
    'Las Palmas',
    'Bilbao',
  ],
  NL: [
    'Amsterdam',
    'Rotterdam',
    'The Hague',
    'Utrecht',
    'Eindhoven',
    'Groningen',
    'Tilburg',
    'Almere',
    'Breda',
    'Nijmegen',
  ],
  BE: [
    'Brussels',
    'Antwerp',
    'Ghent',
    'Charleroi',
    'Liège',
    'Bruges',
    'Namur',
    'Leuven',
    'Mons',
    'Aalst',
  ],
  CA: [
    'Toronto',
    'Montreal',
    'Vancouver',
    'Calgary',
    'Edmonton',
    'Ottawa',
    'Winnipeg',
    'Quebec City',
    'Hamilton',
    'Kitchener',
  ],
  AU: [
    'Sydney',
    'Melbourne',
    'Brisbane',
    'Perth',
    'Adelaide',
    'Gold Coast',
    'Newcastle',
    'Canberra',
    'Sunshine Coast',
    'Wollongong',
  ],
  CN: [
    'Shanghai',
    'Beijing',
    'Guangzhou',
    'Shenzhen',
    'Chengdu',
    'Hangzhou',
    'Wuhan',
    "Xi'an",
    'Nanjing',
    'Tianjin',
  ],
  JP: [
    'Tokyo',
    'Yokohama',
    'Osaka',
    'Nagoya',
    'Sapporo',
    'Fukuoka',
    'Kobe',
    'Kawasaki',
    'Kyoto',
    'Saitama',
  ],
  KR: [
    'Seoul',
    'Busan',
    'Incheon',
    'Daegu',
    'Daejeon',
    'Gwangju',
    'Suwon',
    'Ulsan',
    'Changwon',
    'Goyang',
  ],
  IN: [
    'Mumbai',
    'Delhi',
    'Bangalore',
    'Hyderabad',
    'Ahmedabad',
    'Chennai',
    'Kolkata',
    'Surat',
    'Pune',
    'Jaipur',
  ],
  BR: [
    'São Paulo',
    'Rio de Janeiro',
    'Brasília',
    'Salvador',
    'Fortaleza',
    'Belo Horizonte',
    'Manaus',
    'Curitiba',
    'Recife',
    'Porto Alegre',
  ],
  MX: [
    'Mexico City',
    'Guadalajara',
    'Monterrey',
    'Puebla',
    'Tijuana',
    'León',
    'Juárez',
    'Torreón',
    'Querétaro',
    'San Luis Potosí',
  ],
  AR: [
    'Buenos Aires',
    'Córdoba',
    'Rosario',
    'Mendoza',
    'Tucumán',
    'La Plata',
    'Mar del Plata',
    'Salta',
    'Santa Fe',
    'San Juan',
  ],
  ZA: [
    'Johannesburg',
    'Cape Town',
    'Durban',
    'Pretoria',
    'Port Elizabeth',
    'Bloemfontein',
    'East London',
    'Kimberley',
    'Polokwane',
    'Nelspruit',
  ],
  AE: [
    'Dubai',
    'Abu Dhabi',
    'Sharjah',
    'Al Ain',
    'Ajman',
    'Ras Al Khaimah',
    'Fujairah',
    'Umm Al Quwain',
  ],
  SA: [
    'Riyadh',
    'Jeddah',
    'Mecca',
    'Medina',
    'Dammam',
    'Khobar',
    'Taif',
    'Abha',
    'Tabuk',
    'Buraydah',
  ],
  TR: [
    'Istanbul',
    'Ankara',
    'Izmir',
    'Bursa',
    'Antalya',
    'Adana',
    'Gaziantep',
    'Konya',
    'Kayseri',
    'Mersin',
  ],
  PL: [
    'Warsaw',
    'Kraków',
    'Łódź',
    'Wrocław',
    'Poznań',
    'Gdańsk',
    'Szczecin',
    'Bydgoszcz',
    'Lublin',
    'Katowice',
  ],
  SE: [
    'Stockholm',
    'Gothenburg',
    'Malmö',
    'Uppsala',
    'Västerås',
    'Örebro',
    'Linköping',
    'Helsingborg',
    'Jönköping',
    'Norrköping',
  ],
  NO: [
    'Oslo',
    'Bergen',
    'Trondheim',
    'Stavanger',
    'Bærum',
    'Kristiansand',
    'Fredrikstad',
    'Tromsø',
    'Sandnes',
    'Asker',
  ],
  DK: [
    'Copenhagen',
    'Aarhus',
    'Odense',
    'Aalborg',
    'Esbjerg',
    'Randers',
    'Kolding',
    'Horsens',
    'Vejle',
    'Roskilde',
  ],
  FI: [
    'Helsinki',
    'Espoo',
    'Tampere',
    'Vantaa',
    'Oulu',
    'Turku',
    'Jyväskylä',
    'Lahti',
    'Kuopio',
    'Pori',
  ],
  CH: [
    'Zurich',
    'Geneva',
    'Basel',
    'Bern',
    'Lausanne',
    'Winterthur',
    'Lucerne',
    'St. Gallen',
    'Lugano',
    'Biel',
  ],
  AT: [
    'Vienna',
    'Graz',
    'Linz',
    'Salzburg',
    'Innsbruck',
    'Klagenfurt',
    'Villach',
    'Wels',
    'Sankt Pölten',
    'Dornbirn',
  ],
  PT: [
    'Lisbon',
    'Porto',
    'Vila Nova de Gaia',
    'Amadora',
    'Braga',
    'Funchal',
    'Coimbra',
    'Setúbal',
    'Almada',
    'Agualva-Cacém',
  ],
  GR: [
    'Athens',
    'Thessaloniki',
    'Patras',
    'Heraklion',
    'Larissa',
    'Volos',
    'Rhodes',
    'Ioannina',
    'Chania',
    'Kavala',
  ],
  IE: [
    'Dublin',
    'Cork',
    'Limerick',
    'Galway',
    'Waterford',
    'Drogheda',
    'Dundalk',
    'Swords',
    'Bray',
    'Navan',
  ],
  NZ: [
    'Auckland',
    'Wellington',
    'Christchurch',
    'Hamilton',
    'Tauranga',
    'Napier',
    'Dunedin',
    'Palmerston North',
    'Nelson',
    'Rotorua',
  ],
  SG: ['Singapore'],
  MY: [
    'Kuala Lumpur',
    'George Town',
    'Ipoh',
    'Shah Alam',
    'Petaling Jaya',
    'Subang Jaya',
    'Johor Bahru',
    'Kota Kinabalu',
    'Kuching',
    'Kota Bharu',
  ],
  TH: [
    'Bangkok',
    'Nonthaburi',
    'Nakhon Ratchasima',
    'Chiang Mai',
    'Hat Yai',
    'Udon Thani',
    'Pak Kret',
    'Khon Kaen',
    'Nakhon Si Thammarat',
    'Ubon Ratchathani',
  ],
  VN: [
    'Ho Chi Minh City',
    'Hanoi',
    'Da Nang',
    'Haiphong',
    'Can Tho',
    'Bien Hoa',
    'Hue',
    'Nha Trang',
    'Vung Tau',
    'Quy Nhon',
  ],
  PH: [
    'Manila',
    'Quezon City',
    'Caloocan',
    'Davao City',
    'Cebu City',
    'Zamboanga City',
    'Antipolo',
    'Pasig',
    'Cagayan de Oro',
    'Valenzuela',
  ],
  ID: [
    'Jakarta',
    'Surabaya',
    'Bandung',
    'Medan',
    'Semarang',
    'Palembang',
    'Makassar',
    'Tangerang',
    'Depok',
    'South Tangerang',
  ],
};

type AutocompleteOption = {
  value: string;
  label: string;
  flag?: string;
};

type SimpleAutocompleteProps = {
  id: string;
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  onSelect?: (value: string) => void;
  onSelectWithValidation?: (value: string) => void;
  placeholder: string;
  options: AutocompleteOption[];
  isLoading?: boolean;
  className?: string;
  inputRef?: RefObject<HTMLInputElement>;
  error?: string;
  touched?: boolean;
  isValid?: boolean;
  maxResults?: number;
};

const SimpleAutocomplete: FC<SimpleAutocompleteProps> = ({
  id,
  name,
  value,
  onChange,
  onBlur,
  onSelect,
  onSelectWithValidation,
  placeholder,
  options,
  isLoading = false,
  className = '',
  inputRef,
  error,
  touched,
  isValid,
  maxResults = 10,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [searchValue, setSearchValue] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const justSelectedRef = useRef(false);
  const isCountryAutocomplete = options.length > 0 && options[0].flag !== undefined;

  // Initialize search value from value prop
  useEffect(() => {
    if (!value) {
      setSearchValue('');
      return;
    }

    // If value is a country code, find the country name
    if (isCountryAutocomplete) {
      // This is a country autocomplete - value is a code
      const option = options.find((opt) => opt.value === value);
      if (option) {
        setSearchValue(option.label);
      } else {
        // Value might be a country name already (fallback)
        setSearchValue(value);
      }
    } else {
      // This is a city autocomplete - value is the city name
      setSearchValue(value);
    }
  }, [value, options, isCountryAutocomplete]);

  // Filter options based on search with loading simulation
  const filteredOptions = options
    .filter((option) => {
      if (!searchValue.trim()) return false;
      const searchLower = searchValue.toLowerCase();
      return (
        option.label.toLowerCase().includes(searchLower) ||
        option.value.toLowerCase().includes(searchLower) ||
        (isCountryAutocomplete && option.value.toLowerCase() === searchLower)
      );
    })
    .slice(0, maxResults);

  // Simulate loading when searching (debounced)
  useEffect(() => {
    if (searchValue.trim() && isOpen) {
      setIsSearching(true);
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
      searchTimeoutRef.current = setTimeout(() => {
        setIsSearching(false);
      }, 300); // Simulate 300ms search delay
    } else {
      setIsSearching(false);
    }

    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, [searchValue, isOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setHighlightedIndex(-1);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  // Handle input change
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setSearchValue(newValue);
    onChange(event);
    setIsOpen(true);
    setHighlightedIndex(-1);
  };

  // Handle input focus
  const handleFocus = () => {
    if (filteredOptions.length > 0) {
      setIsOpen(true);
    }
  };

  // Handle option select
  const handleSelect = (option: AutocompleteOption) => {
    justSelectedRef.current = true;
    setSearchValue(option.label);
    setIsOpen(false);
    setHighlightedIndex(-1);

    // Call onSelectWithValidation FIRST, before onChange
    // This ensures validation happens with the selected value immediately
    if (onSelectWithValidation) {
      onSelectWithValidation(option.value);
    }

    // Create synthetic event for onChange
    const syntheticEvent = {
      target: { name, value: option.value },
    } as ChangeEvent<HTMLInputElement>;
    onChange(syntheticEvent);

    // Call onSelect if provided
    if (onSelect) {
      onSelect(option.value);
    }

    // Reset flag after a delay to prevent onBlur from validating
    setTimeout(() => {
      justSelectedRef.current = false;
    }, 300);
  };

  // Handle keyboard navigation
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen || filteredOptions.length === 0) {
      if (event.key === 'ArrowDown' && filteredOptions.length > 0) {
        setIsOpen(true);
        setHighlightedIndex(0);
      }
      return;
    }

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        setHighlightedIndex((prev) => {
          const next = prev < filteredOptions.length - 1 ? prev + 1 : prev;
          // Scroll into view
          if (listRef.current && next >= 0) {
            const item = listRef.current.children[next] as HTMLElement;
            if (item) {
              item.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
            }
          }
          return next;
        });
        break;
      case 'ArrowUp':
        event.preventDefault();
        setHighlightedIndex((prev) => {
          const next = prev > 0 ? prev - 1 : -1;
          // Scroll into view
          if (listRef.current && next >= 0) {
            const item = listRef.current.children[next] as HTMLElement;
            if (item) {
              item.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
            }
          }
          return next;
        });
        break;
      case 'Enter':
        event.preventDefault();
        if (highlightedIndex >= 0 && highlightedIndex < filteredOptions.length) {
          handleSelect(filteredOptions[highlightedIndex]);
        }
        break;
      case 'Escape':
        event.preventDefault();
        setIsOpen(false);
        setHighlightedIndex(-1);
        // Return focus to input when closing
        inputRef.current?.focus();
        break;
      case 'Tab':
        // Close dropdown on Tab
        setIsOpen(false);
        setHighlightedIndex(-1);
        break;
    }
  };

  const showLoading = isLoading || isSearching;
  const showSkeletons = showLoading && searchValue.trim() && isOpen;
  // Don't show spinner if field is already valid (to avoid overlap with success icon)
  const showSpinner = showLoading && !(touched && !error && isValid);

  return (
    <div ref={containerRef} className="sino-simple-form__autocomplete-wrapper">
      <div className="sino-simple-form__autocomplete-input-wrapper">
        <input
          ref={inputRef}
          id={id}
          name={name}
          type="text"
          value={searchValue}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={() => {
            // Delay to allow click on option
            // Only trigger validation if user didn't just select an option
            setTimeout(() => {
              if (!justSelectedRef.current) {
                onBlur();
              }
              setIsOpen(false);
              setHighlightedIndex(-1);
            }, 200);
          }}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className={`sino-simple-form__input${error ? ' sino-simple-form__input--error' : ''}${
            touched && !error && isValid ? ' sino-simple-form__input--success' : ''
          }${showLoading && !(touched && !error && isValid) ? ' sino-simple-form__input--loading' : ''}${className ? ` ${className}` : ''}`}
          autoComplete="off"
          aria-autocomplete="list"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-controls={`${id}-listbox`}
          aria-label={placeholder}
          aria-describedby={
            error ? `${id}-error` : touched && !error && isValid ? `${id}-success` : undefined
          }
          aria-invalid={error ? 'true' : 'false'}
          aria-activedescendant={
            highlightedIndex >= 0 ? `${id}-option-${highlightedIndex}` : undefined
          }
        />
        {showSpinner && (
          <span className="sino-simple-form__autocomplete-spinner" aria-hidden="true">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="32"
                strokeDashoffset="32"
                opacity="0.3"
              />
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="32"
                strokeDashoffset="24"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 12 12"
                  to="360 12 12"
                  dur="0.8s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>
          </span>
        )}
      </div>
      {isOpen && (filteredOptions.length > 0 || showSkeletons) && (
        <ul
          ref={listRef}
          id={`${id}-listbox`}
          className="sino-simple-form__autocomplete-list"
          role="listbox"
        >
          {showSkeletons ? (
            <>
              {Array.from({ length: 3 }).map((_, index) => (
                <li
                  key={`skeleton-${index}`}
                  className="sino-simple-form__autocomplete-skeleton"
                  role="option"
                >
                  {isCountryAutocomplete && (
                    <span className="sino-simple-form__autocomplete-skeleton-flag"></span>
                  )}
                  <span className="sino-simple-form__autocomplete-skeleton-text"></span>
                </li>
              ))}
              <li className="sino-simple-form__autocomplete-loading">
                <span className="sino-simple-form__autocomplete-loading-text">
                  {isCountryAutocomplete ? 'Loading countries...' : 'Loading suggestions...'}
                </span>
              </li>
            </>
          ) : (
            filteredOptions.map((option, index) => (
              <li
                key={option.value}
                id={`${id}-option-${index}`}
                className={`sino-simple-form__autocomplete-option${
                  highlightedIndex === index
                    ? ' sino-simple-form__autocomplete-option--highlighted'
                    : ''
                }`}
                role="option"
                aria-selected={highlightedIndex === index}
                onClick={() => handleSelect(option)}
                onMouseEnter={() => setHighlightedIndex(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleSelect(option);
                  }
                }}
                tabIndex={-1}
              >
                {option.flag && (
                  <span className="sino-simple-form__autocomplete-flag" aria-hidden="true">
                    {option.flag}
                  </span>
                )}
                <span className="sino-simple-form__autocomplete-label">{option.label}</span>
              </li>
            ))
          )}
        </ul>
      )}
      {/* Don't show "No results found" - user can still type freely */}
    </div>
  );
};

// Helper to create country options
export const createCountryOptions = (): AutocompleteOption[] => {
  return COUNTRIES.map((country) => ({
    value: country.code,
    label: country.name,
    flag: country.flag,
  }));
};

// Helper to create city options based on country
export const createCityOptions = (countryCode: string): AutocompleteOption[] => {
  const cities = CITIES_BY_COUNTRY[countryCode] || [];
  return cities.map((city) => ({
    value: city,
    label: city,
  }));
};

export default SimpleAutocomplete;
