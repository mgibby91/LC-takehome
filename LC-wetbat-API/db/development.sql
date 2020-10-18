
-- ************************************************************
-- customers table
-- ************************************************************
INSERT INTO customers
  (name, email, phone_number)
VALUES
  ('Dustin Johnson', 'dj@dj.com', '000-000-0000'),
  ('John Rahm', 'jr@jr.com', '000-000-0001'),
  ('Justion Thomas', 'jt@jt.com', '000-000-0002'),
  ('Rory McIlroy', 'rm@rm.com', '000-000-0003'),
  ('Bryson DeChambeau', 'bd@bd.com', '000-000-0004'),
  ('Collin Morikawa', 'cm@cm.com', '000-000-0005'),
  ('Webb Simpson', 'ws@ws.com', '000-000-0006'),
  ('Xander Schauffele', 'xf@xf.com', '000-000-0007'),
  ('Patrick Reed', 'pr@pr.com', '000-000-0008'),
  ('Tyrrell Hatton', 'tr@tr.com', '000-000-0009');


-- ************************************************************
-- quotes table
-- ************************************************************
INSERT INTO quotes
  (departure_location, destination_location, departure_date, return_date, price_cents, is_completed)
VALUES
  ('Los Angeles (LAX)', 'Tokyo (HND)', '2020-06-19 13:47:22', '2021-07-15 16:10:51', 100000, false),
  ('Los Angeles (LAX)', 'London (LHR)', '2020-11-12 16:55:13', '2021-04-25 23:58:30', 250000, false),
  ('London (LHR)', 'Paris (CDG)', '2020-10-10 03:06:35', '2021-10-12 16:31:34', 250000, false),
  ('Tokyo (HND)', 'Beijing (PEK)', '2020-10-03 15:21:09', '2021-10-07 08:32:21', 500000, false),
  ('Calgary (YYC)', 'Vancouver (YVR)', '2021-01-01 00:14:22', '2021-06-24 07:34:21', 100000, true),
  ('Vancouver (YVR)', 'Tokyo (HND)', '2020-11-04 09:52:08', '2021-02-24 08:30:35', 250000, true),
  ('Calgary (YYC)', 'Los Angeles (LAX)', '2020-11-19 20:29:52', '2021-11-22 22:04:47', 100000, true);


-- ************************************************************
-- customers_quote table
-- ************************************************************
INSERT INTO customers_quote
  (customer_id, booker_id, quote_id)
VALUES
  (1, 1, 1),
  (2, 1, 1),
  (3, 1, 1),
  (4, 1, 1),
  (2, 2, 2),
  (3, 2, 2),
  (4, 2, 2),
  (3, 3, 3),
  (4, 3, 3),
  (5, 3, 3),
  (6, 3, 3),
  (4, 4, 4),
  (5, 4, 4),
  (6, 4, 4),
  (7, 4, 4),
  (5, 5, 5),
  (6, 5, 5),
  (6, 6, 6),
  (7, 6, 6),
  (8, 6, 6),
  (9, 6, 6),
  (7, 7, 7),
  (8, 7, 7),
  (9, 7, 7);


-- ************************************************************
-- transportation table
-- ************************************************************
INSERT INTO transportation
  (quote_id, name)
VALUES
  (1, 'Bus'),
  (1, 'Train'),
  (2, 'Boat'),
  (2, 'Train'),
  (3, 'Bus'),
  (4, 'Bus'),
  (4, 'Train'),
  (5, 'Bus'),
  (6, 'Train'),
  (7, 'Bus'),
  (7, 'Train'),
  (7, 'Boat');