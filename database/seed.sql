-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 24, 2025 at 08:42 PM
-- Server version: 5.7.24
-- PHP Version: 8.0.1
SET
    SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";

START TRANSACTION;

SET
    time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */
;

/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */
;

/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */
;

/*!40101 SET NAMES utf8mb4 */
;

--
-- Database: `architrack-orm`
--


--
-- Dumping data for table `department`
--
INSERT INTO
    `department` (`id`, `name`, `createdAt`, `updatedAt`)
VALUES
    (
        1,
        'Program',
        '2024-09-14 01:07:01.413',
        '2024-09-14 01:07:01.413'
    ),
    (
        2,
        'Configuration',
        '2024-09-14 01:07:01.437',
        '2024-09-14 01:07:01.437'
    ),
    (
        3,
        'Mobility',
        '2024-09-14 01:07:01.442',
        '2024-09-14 01:07:01.442'
    ),
    (
        4,
        'Paradigm',
        '2024-09-14 01:07:01.446',
        '2024-09-14 01:07:01.446'
    ),
    (
        5,
        'Functionality',
        '2024-09-14 01:07:01.451',
        '2024-09-14 01:07:01.451'
    );

--
-- Dumping data for table `user`
--
INSERT INTO
    `user` (
        `id`,
        `uuid`,
        `email`,
        `password`,
        `firstname`,
        `lastname`,
        `role`,
        `createdAt`,
        `updatedAt`,
        `departmentId`
    )
VALUES
    (
        1,
        '3f25b035-96bc-4ad5-a90d-4bcc92b92f3c',
        'evelyn.hayes99@c-corp.com',
        'm0HJ4idimoCrxZP',
        'Evelyn',
        'Hayes',
        'ARCHITECT',
        '2024-09-14 01:07:30.491',
        '2024-09-14 01:07:30.491',
        4
    ),
    (
        2,
        'e6e664c5-c82c-4155-974c-e679d58ebad7',
        'lew_rath@c-corp.com',
        '2ts3O7yuNpzLkfG',
        'Lew',
        'Rath',
        'BUSINESS_ACCOUNTABLE',
        '2024-09-14 01:07:30.498',
        '2024-09-14 01:07:30.498',
        2
    ),
    (
        3,
        'd4735d95-dec0-42e8-9fc8-55638c31a562',
        'milton_turner98@c-corp.com',
        'ZKONFVUB7YyjBKX',
        'Milton',
        'Turner',
        'ARCHITECT',
        '2024-09-14 01:07:30.503',
        '2024-09-14 01:07:30.503',
        3
    ),
    (
        4,
        '1bd4141c-30ac-4e03-8c1d-2ee922fd6c68',
        'mireille_pollich65@c-corp.com',
        'fYdMH7_d0gAprCI',
        'Mireille',
        'Pollich',
        'ARCHITECT',
        '2024-09-14 01:07:30.529',
        '2024-09-14 01:07:30.529',
        3
    ),
    (
        5,
        '1b622792-cdae-4e3b-a4da-b2afe580cab5',
        'adele.watsica@c-corp.com',
        '05swd1mrVu1Qob8',
        'Adele',
        'Watsica',
        'ARCHITECT',
        '2024-09-14 01:07:30.533',
        '2024-09-14 01:07:30.533',
        2
    ),
    (
        6,
        '863c5640-d08e-43ea-af7d-7975d602c658',
        'elise.hammes@c-corp.com',
        '10y6Z95t8YviToW',
        'Elise',
        'Hammes',
        'BUSINESS_ACCOUNTABLE',
        '2024-09-14 01:07:30.536',
        '2024-09-14 01:07:30.536',
        5
    ),
    (
        7,
        'dc931c29-8b09-48e7-8ab8-aa5fd5cc19cd',
        'jacinthe.kreiger-larkin21@c-corp.com',
        'pKuCKWfDg6Qvhoz',
        'Jacinthe',
        'Kreiger-Larkin',
        'ARCHITECT',
        '2024-09-14 01:07:30.540',
        '2024-09-14 01:07:30.540',
        5
    ),
    (
        8,
        '2baa97b6-64ab-4ab2-84c7-e03316f6e8e7',
        'antone_watsica@c-corp.com',
        'YFJulnapyNfcOXI',
        'Antone',
        'Watsica',
        'IT_ACCOUNTABLE',
        '2024-09-14 01:07:30.544',
        '2024-09-14 01:07:30.544',
        3
    ),
    (
        9,
        '79489435-5369-46ab-b3bd-1d9997c8faea',
        'dexter_buckridge37@c-corp.com',
        'hVuTBp280ygBUi9',
        'Dexter',
        'Buckridge',
        'STANDARD_USER',
        '2024-09-14 01:07:30.550',
        '2024-09-14 01:07:30.550',
        5
    ),
    (
        10,
        'ec8271a5-bc23-4fa7-a708-3c9027dab616',
        'hollis_glover84@c-corp.com',
        'UrjiB8QXDnzwztM',
        'Hollis',
        'Glover',
        'BUSINESS_ACCOUNTABLE',
        '2024-09-14 01:07:30.555',
        '2024-09-14 01:07:30.555',
        4
    ),
    (
        11,
        'eec7c123-928c-4af4-a7e0-eccf7e795e92',
        'yazmin.anderson51@c-corp.com',
        'TsgPCQ187sJi0II',
        'Yazmin',
        'Anderson',
        'IT_ACCOUNTABLE',
        '2024-09-14 01:07:45.261',
        '2024-09-14 01:07:45.261',
        1
    ),
    (
        12,
        '6d8e19e0-7748-4273-b45d-6d0c34ebf4d8',
        'toy.flatley@c-corp.com',
        'bAJneTwXD0Xc1kM',
        'Toy',
        'Flatley',
        'ARCHITECT',
        '2024-09-14 01:07:45.271',
        '2024-09-14 01:07:45.271',
        1
    ),
    (
        13,
        '252db807-7f3e-4b2c-866f-a7807752344c',
        'wava_balistreri@c-corp.com',
        'pv9h8pOpLCuyKVY',
        'Wava',
        'Balistreri',
        'IT_ACCOUNTABLE',
        '2024-09-14 01:07:45.276',
        '2024-09-14 01:07:45.276',
        1
    ),
    (
        14,
        '64d25d40-3d14-4320-bd2d-7e592511ea5a',
        'fiona.nader@c-corp.com',
        '16pY1dXElSt_Gim',
        'Fiona',
        'Nader',
        'IT_ACCOUNTABLE',
        '2024-09-14 01:07:45.281',
        '2024-09-14 01:07:45.281',
        1
    ),
    (
        15,
        'f6d11f05-faee-4d95-a84b-55e7ca48d224',
        'norma.blick@c-corp.com',
        'll1j3rafKI59mYT',
        'Norma',
        'Blick',
        'BUSINESS_ACCOUNTABLE',
        '2024-09-14 01:07:45.286',
        '2024-09-14 01:07:45.286',
        5
    ),
    (
        16,
        '6a2118b5-209d-4a6e-8505-25c9cc14e353',
        'esther.gerhold43@c-corp.com',
        'oZEoAiXwTEbzYSz',
        'Esther',
        'Gerhold',
        'BUSINESS_ACCOUNTABLE',
        '2024-09-14 01:07:45.291',
        '2024-09-14 01:07:45.291',
        1
    ),
    (
        17,
        'f85a324c-024c-46a1-a4b1-ef0fc0f5a117',
        'lora.baumbach@c-corp.com',
        'X4jux4LijCXU8L2',
        'Lora',
        'Baumbach',
        'IT_ACCOUNTABLE',
        '2024-09-14 01:07:45.295',
        '2024-09-14 01:07:45.295',
        5
    ),
    (
        18,
        'c26a7875-93f4-4567-aab6-cde96ae674ac',
        'lelia.schmidt@c-corp.com',
        'dz2a8k_nBS6EvWB',
        'Lelia',
        'Schmidt',
        'STANDARD_USER',
        '2024-09-14 01:07:45.299',
        '2024-09-14 01:07:45.299',
        2
    ),
    (
        19,
        'e9724ecd-e59c-4097-a1d8-2720a3c90b51',
        'ernestine.zboncak-weber29@c-corp.com',
        'H4yYncNooa4iuoZ',
        'Ernestine',
        'Zboncak-Weber',
        'ARCHITECT',
        '2024-09-14 01:07:45.304',
        '2024-09-14 01:07:45.304',
        1
    ),
    (
        20,
        'f917ca4a-82ae-4b2a-80e0-78b2b0f09951',
        'lori_zemlak68@c-corp.com',
        'eeKLZeiSk0qBAuL',
        'Lori',
        'Zemlak',
        'BUSINESS_ACCOUNTABLE',
        '2024-09-14 01:07:45.308',
        '2024-09-14 01:07:45.308',
        4
    ),
    (
        21,
        '8d5027e1-81d8-494b-b264-93528fe21681',
        'test@corp.com',
        '$argon2id$v=19$m=65536,t=3,p=4$AsyO7t2eFVHftJ7HhUDgbg$0So8ihRHgWJY2kiwqCVmcHnAJVMXX6hIedcByL0hjdI',
        'John',
        'doe',
        'STANDARD_USER',
        '2024-09-14 01:09:18.002',
        '2024-09-14 01:09:18.002',
        3
    ),
    (
        22,
        '61073ce2-1702-4387-b187-015af77b3036',
        'ok@corp.com',
        '$argon2id$v=19$m=65536,t=3,p=4$YOHHpnxhYjcJDO0MOxM3gQ$KM3hJVHxRfOnvIbVqlacS6Or+V8k6LlF2w8jpBVwaDM',
        'ok',
        'ok',
        'ARCHITECT',
        '2024-09-15 03:17:46.178',
        '2024-09-15 03:17:46.178',
        5
    ),
    (
        23,
        'bd68a0a9-56da-48f4-b34b-522e63786c57',
        'h@corp.com',
        '$argon2id$v=19$m=65536,t=3,p=4$fuXf9bpZS+S8VZBfnk85nQ$M3fBIkYXKwbJ05eV6OuJf9JsXUAh8YfHXOrSZ9kJ4Z0',
        'hello',
        'hello',
        'IT_ACCOUNTABLE',
        '2024-09-15 03:21:00.653',
        '2024-09-15 03:21:00.653',
        3
    ),
    (
        24,
        '0eaecc77-7082-4007-a3f7-c07501601655',
        'oki@corp.com',
        '$argon2id$v=19$m=65536,t=3,p=4$WSW0AaS0/pP5dZrQ0ToIIQ$7Ed61HFTFOu6+GY+AD9Yz+y5UzV7LDhrkyxmE2cZ2uo',
        'OKI',
        'OKI',
        'BUSINESS_ACCOUNTABLE',
        '2024-09-15 03:21:41.247',
        '2024-09-15 03:21:41.247',
        2
    );

--
-- Dumping data for table `businesscapability`
--
INSERT INTO
    `businesscapability` (
        `id`,
        `name`,
        `createdAt`,
        `updatedAt`,
        `departmentId`
    )
VALUES
    (
        1,
        'orchestrate B2C convergence',
        '2024-09-14 01:07:01.693',
        '2024-09-14 01:07:01.693',
        1
    ),
    (
        2,
        'synergize mission-critical content',
        '2024-09-14 01:07:01.710',
        '2024-09-14 01:07:01.710',
        4
    ),
    (
        3,
        'expedite integrated schemas',
        '2024-09-14 01:07:01.718',
        '2024-09-14 01:07:01.718',
        2
    ),
    (
        4,
        'embrace impactful platforms',
        '2024-09-14 01:07:01.767',
        '2024-09-14 01:07:01.767',
        2
    ),
    (
        5,
        'innovate extensible interfaces',
        '2024-09-14 01:07:01.777',
        '2024-09-14 01:07:01.777',
        1
    ),
    (
        6,
        'streamline content',
        '2024-09-14 01:07:01.791',
        '2024-09-14 01:07:01.791',
        5
    ),
    (
        7,
        'architect extensible metrics',
        '2024-09-14 01:07:01.796',
        '2024-09-14 01:07:01.796',
        5
    ),
    (
        8,
        'e-enable sticky action-items',
        '2024-09-14 01:07:01.802',
        '2024-09-14 01:07:01.802',
        5
    ),
    (
        9,
        'facilitate turn-key metrics',
        '2024-09-14 01:07:01.809',
        '2024-09-14 01:07:01.809',
        1
    ),
    (
        10,
        'synthesize rich bandwidth',
        '2024-09-14 01:07:01.819',
        '2024-09-14 01:07:01.819',
        2
    ),
    (
        11,
        'monetize wireless bandwidth',
        '2024-09-14 01:07:01.825',
        '2024-09-14 01:07:01.825',
        1
    ),
    (
        12,
        'e-enable seamless infrastructures',
        '2024-09-14 01:07:01.833',
        '2024-09-14 01:07:01.833',
        1
    ),
    (
        13,
        'enable out-of-the-box solutions',
        '2024-09-14 01:07:01.838',
        '2024-09-14 01:07:01.838',
        2
    ),
    (
        14,
        'facilitate strategic communities',
        '2024-09-14 01:07:01.842',
        '2024-09-14 01:07:01.842',
        4
    ),
    (
        15,
        'generate revolutionary solutions',
        '2024-09-14 01:07:01.847',
        '2024-09-14 01:07:01.847',
        4
    ),
    (
        16,
        'envisioneer scalable e-commerce',
        '2024-09-14 01:07:01.853',
        '2024-09-14 01:07:01.853',
        1
    ),
    (
        17,
        'reinvent user-centric lifetime value',
        '2024-09-14 01:07:01.856',
        '2024-09-14 01:07:01.856',
        4
    ),
    (
        18,
        'recontextualize integrated partnerships',
        '2024-09-14 01:07:01.860',
        '2024-09-14 01:07:01.860',
        1
    ),
    (
        19,
        'engineer B2B e-markets',
        '2024-09-14 01:07:01.865',
        '2024-09-14 01:07:01.865',
        5
    ),
    (
        20,
        'enable synergistic convergence',
        '2024-09-14 01:07:01.870',
        '2024-09-14 01:07:01.870',
        1
    ),
    (
        21,
        'syndicate best-of-breed solutions',
        '2024-09-14 01:07:01.875',
        '2024-09-14 01:07:01.875',
        1
    ),
    (
        22,
        'iterate web-enabled schemas',
        '2024-09-14 01:07:01.878',
        '2024-09-14 01:07:01.878',
        4
    ),
    (
        23,
        'target value-added infrastructures',
        '2024-09-14 01:07:01.883',
        '2024-09-14 01:07:01.883',
        3
    ),
    (
        24,
        'incubate open-source e-markets',
        '2024-09-14 01:07:01.889',
        '2024-09-14 01:07:01.889',
        4
    ),
    (
        25,
        'e-enable customized initiatives',
        '2024-09-14 01:07:01.893',
        '2024-09-14 01:07:01.893',
        5
    );


--
-- Dumping data for table `applicationtype`
--
INSERT INTO
    `applicationtype` (
        `id`,
        `name`,
        `description`,
        `createdAt`,
        `updatedAt`
    )
VALUES
    (
        1,
        'Web Application',
        NULL,
        '2024-09-14 01:07:01.458',
        '2024-09-14 01:07:01.458'
    ),
    (
        2,
        'Mobile Application',
        NULL,
        '2024-09-14 01:07:01.489',
        '2024-09-14 01:07:01.489'
    ),
    (
        3,
        'Desktop Application',
        NULL,
        '2024-09-14 01:07:01.493',
        '2024-09-14 01:07:01.493'
    ),
    (
        4,
        'Embedded System',
        NULL,
        '2024-09-14 01:07:01.496',
        '2024-09-14 01:07:01.496'
    ),
    (
        5,
        'Other',
        NULL,
        '2024-09-14 01:07:01.501',
        '2024-09-14 01:07:01.501'
    );

--
-- Dumping data for table `language`
--
INSERT INTO
    `language` (`id`, `name`, `createdAt`, `updatedAt`)
VALUES
    (
        1,
        'JavaScript',
        '2024-09-14 01:07:01.645',
        '2024-09-14 01:07:01.645'
    ),
    (
        2,
        'Python',
        '2024-09-14 01:07:01.654',
        '2024-09-14 01:07:01.654'
    ),
    (
        3,
        'Java',
        '2024-09-14 01:07:01.658',
        '2024-09-14 01:07:01.658'
    ),
    (
        4,
        'C#',
        '2024-09-14 01:07:01.662',
        '2024-09-14 01:07:01.662'
    ),
    (
        5,
        'Swift',
        '2024-09-14 01:07:01.667',
        '2024-09-14 01:07:01.667'
    ),
    (
        6,
        'Go',
        '2024-09-14 01:07:01.671',
        '2024-09-14 01:07:01.671'
    ),
    (
        7,
        'Ruby',
        '2024-09-14 01:07:01.674',
        '2024-09-14 01:07:01.674'
    ),
    (
        8,
        'PHP',
        '2024-09-14 01:07:01.678',
        '2024-09-14 01:07:01.678'
    ),
    (
        9,
        'TypeScript',
        '2024-09-14 01:07:01.683',
        '2024-09-14 01:07:01.683'
    ),
    (
        10,
        'Kotlin',
        '2024-09-14 01:07:01.688',
        '2024-09-14 01:07:01.688'
    );

--
-- Dumping data for table `provider`
--
INSERT INTO
    `provider` (
        `id`,
        `name`,
        `location`,
        `logo`,
        `description`,
        `url`,
        `createdAt`,
        `updatedAt`
    )
VALUES
    (
        1,
        'Walter, Beatty and Hamill',
        '93863 Division Street Apt. 457',
        'https://loremflickr.com/640/480/business?lock=5988656783294464',
        'Sublime totam vita tenuis.',
        'https://distinct-trench.name',
        '2024-09-14 01:07:01.508',
        '2024-09-14 01:07:01.508'
    ),
    (
        2,
        'Crist - Fadel',
        '3919 Willow Street Suite 159',
        'https://loremflickr.com/640/480/business?lock=2638516104200192',
        'Vesper ager teres amaritudo defero sequi vestrum.',
        'https://bright-ease.info/',
        '2024-09-14 01:07:01.515',
        '2024-09-14 01:07:01.515'
    ),
    (
        3,
        'Schuster and Sons',
        '38904 Dejon Prairie Apt. 286',
        'https://loremflickr.com/640/480/business?lock=3521694337597440',
        'Eum strues esse mollitia.',
        'https://tough-fiesta.info',
        '2024-09-14 01:07:01.519',
        '2024-09-14 01:07:01.519'
    ),
    (
        4,
        'Mann LLC',
        '7280 Emmerich Wall Suite 299',
        'https://loremflickr.com/640/480/business?lock=8081707643174912',
        'Aspernatur theatrum ver.',
        'https://perky-doorway.net',
        '2024-09-14 01:07:01.523',
        '2024-09-14 01:07:01.523'
    ),
    (
        5,
        'Bins, Rolfson and Kuphal',
        '3673 Stanton Valley Suite 230',
        'https://loremflickr.com/640/480/business?lock=6748848460398592',
        'Desino vehemens quos cursus.',
        'https://grown-cold.biz',
        '2024-09-14 01:07:01.528',
        '2024-09-14 01:07:01.528'
    ),
    (
        6,
        'Brekke - Fay',
        '2954 Aron Tunnel Apt. 571',
        'https://loremflickr.com/640/480/business?lock=5450200466325504',
        'Veritas eum comminor attonbitus terga antiquus spiculum conservo corroboro.',
        'https://repentant-radio.net',
        '2024-09-14 01:07:01.534',
        '2024-09-14 01:07:01.534'
    ),
    (
        7,
        'Waters - Kub',
        '5925 Cortney Groves Suite 108',
        'https://loremflickr.com/640/480/business?lock=7605311441469440',
        'Vix utor sto delectatio defetiscor cunae degenero studio cultura.',
        'https://sandy-lens.info/',
        '2024-09-14 01:07:01.542',
        '2024-09-14 01:07:01.542'
    ),
    (
        8,
        'Abshire Group',
        '4792 Doyle Mills Suite 483',
        'https://loremflickr.com/640/480/business?lock=4686154712481792',
        'Canis demens solium vindico curo adsum thermae thermae.',
        'https://weepy-grouse.com/',
        '2024-09-14 01:07:01.552',
        '2024-09-14 01:07:01.552'
    ),
    (
        9,
        'Hagenes - Moen',
        '5487 Tyler Mall Suite 100',
        'https://loremflickr.com/640/480/business?lock=8880349956276224',
        'Demo caveo admoveo administratio curiositas aeger.',
        'https://usable-knife-edge.biz/',
        '2024-09-14 01:07:01.560',
        '2024-09-14 01:07:01.560'
    ),
    (
        10,
        'Kub Group',
        '40086 Annie Forest Apt. 506',
        'https://loremflickr.com/640/480/business?lock=5328220050161664',
        'Aegrotatio quam cariosus spes tibi ciminatio.',
        'https://attractive-handmaiden.info/',
        '2024-09-14 01:07:01.567',
        '2024-09-14 01:07:01.567'
    ),
    (
        11,
        'Emmerich, Ledner and Morissette',
        '849 Janae Keys Suite 990',
        'https://loremflickr.com/640/480/business?lock=1548775088717824',
        'Corrumpo harum tametsi sopor cognatus patior dolor arca excepturi cunae.',
        'https://funny-ketch.biz/',
        '2024-09-14 01:07:01.573',
        '2024-09-14 01:07:01.573'
    ),
    (
        12,
        'Spencer and Sons',
        '531 West End Suite 898',
        'https://loremflickr.com/640/480/business?lock=1450714740031488',
        'Sortitus unde deficio.',
        'https://klutzy-parsnip.org/',
        '2024-09-14 01:07:01.578',
        '2024-09-14 01:07:01.578'
    ),
    (
        13,
        'Heidenreich, Lueilwitz and Bartoletti',
        '95420 DuBuque Well Apt. 271',
        'https://loremflickr.com/640/480/business?lock=1958414477426688',
        'Thermae asporto vester voluptate culpo.',
        'https://dizzy-neighbor.info/',
        '2024-09-14 01:07:01.583',
        '2024-09-14 01:07:01.583'
    ),
    (
        14,
        'Kunde, McDermott and Padberg',
        '965 Larson Forge Suite 261',
        'https://loremflickr.com/640/480/business?lock=5908783358279680',
        'Aeneus reiciendis thymum dolore utpote amicitia ratione.',
        'https://lively-cleaner.com',
        '2024-09-14 01:07:01.587',
        '2024-09-14 01:07:01.587'
    ),
    (
        15,
        'Hamill LLC',
        '380 Parker Flats Apt. 327',
        'https://loremflickr.com/640/480/business?lock=8606284389548032',
        'Dignissimos labore bis ratione quae turpis adnuo admiratio.',
        'https://firm-reluctance.com/',
        '2024-09-14 01:07:01.592',
        '2024-09-14 01:07:01.592'
    ),
    (
        16,
        'girl',
        NULL,
        NULL,
        'what?',
        NULL,
        '2024-09-16 01:45:18.221',
        '2024-09-16 01:45:18.221'
    ),
    (
        17,
        'ok',
        'ok',
        '',
        'ok',
        'ok',
        '2024-09-16 01:45:58.609',
        '2024-09-16 01:45:58.609'
    );

--
-- Dumping data for table `software`
--
INSERT INTO
    `software` (
        `id`,
        `name`,
        `description`,
        `version`,
        `createdAt`,
        `updatedAt`
    )
VALUES
    (
        1,
        'Node.js',
        'Antea cupressus caritas cohaero crebro caterva adeptio verumtamen magnam.',
        '1.2.1',
        '2024-09-14 01:07:01.599',
        '2024-09-14 01:07:01.599'
    ),
    (
        2,
        'React',
        'Conspergo repellat amitto fugiat sufficio apostolus.',
        '1.8.1',
        '2024-09-14 01:07:01.606',
        '2024-09-14 01:07:01.606'
    ),
    (
        3,
        'Angular',
        'Excepturi crepusculum quo audio tenetur decipio depromo talus una.',
        '6.9.2',
        '2024-09-14 01:07:01.609',
        '2024-09-14 01:07:01.609'
    ),
    (
        4,
        'Vue.js',
        'Laudantium arbustum atqui blanditiis quod comburo.',
        '0.7.8',
        '2024-09-14 01:07:01.615',
        '2024-09-14 01:07:01.615'
    ),
    (
        5,
        'Django',
        'Barba ea vesica aro suscipio congregatio vulpes trans confero.',
        '4.0.9',
        '2024-09-14 01:07:01.619',
        '2024-09-14 01:07:01.619'
    ),
    (
        6,
        'Flask',
        'Quasi tredecim cresco.',
        '6.7.3',
        '2024-09-14 01:07:01.622',
        '2024-09-14 01:07:01.622'
    ),
    (
        7,
        'Spring Boot',
        'Vulnus accusator sub.',
        '7.7.3',
        '2024-09-14 01:07:01.625',
        '2024-09-14 01:07:01.625'
    ),
    (
        8,
        'ASP.NET',
        'Defleo tenetur validus deprecator tamquam tot tunc veniam maiores.',
        '8.0.7',
        '2024-09-14 01:07:01.634',
        '2024-09-14 01:07:01.634'
    ),
    (
        9,
        'Express.js',
        'Caritas modi teres currus deputo tener.',
        '5.9.7',
        '2024-09-14 01:07:01.637',
        '2024-09-14 01:07:01.637'
    ),
    (
        10,
        'Ruby on Rails',
        'Audeo commodo talio tamdiu.',
        '8.4.0',
        '2024-09-14 01:07:01.641',
        '2024-09-14 01:07:01.641'
    );


--
-- Dumping data for table `application`
--
INSERT INTO
    `application` (
        `id`,
        `name`,
        `description`,
        `version`,
        `comment`,
        `contractType`,
        `state`,
        `criticality`,
        `validationStatus`,
        `hostingType`,
        `createdAt`,
        `updatedAt`,
        `authorId`,
        `departmentId`,
        `businessCapabilityId`,
        `providerId`,
        `applicationTypeId`
    )
VALUES
    (
        1,
        'microchip haptic',
        'Adsuesco officiis pariatur depopulo cado apparatus strues volo.',
        '1.7.8',
        NULL,
        'INTERNAL',
        'PROD',
        'HIGH',
        'TO_BE_VALIDATED',
        'HYBRID',
        '2024-09-14 01:07:45.313',
        '2024-09-14 01:07:45.313',
        4,
        1,
        NULL,
        1,
        3
    ),
    (
        2,
        'array open-source',
        'Corrigo dolorum appono quidem.',
        '7.2.7',
        NULL,
        'EXTERNAL',
        'PROD',
        'HIGH',
        'VALIDATED',
        'HYBRID',
        '2024-09-14 01:07:45.349',
        '2024-09-14 01:07:45.349',
        4,
        1,
        NULL,
        5,
        3
    ),
    (
        3,
        'monitor optical',
        'Debilito tabella cultellus.',
        '5.7.7',
        NULL,
        'INTERNAL',
        'MAINTENANCE',
        'LOW',
        'UNKNOWN',
        'ON_PREMISE',
        '2024-09-14 01:07:45.419',
        '2024-09-14 01:07:45.419',
        4,
        5,
        NULL,
        4,
        2
    ),
    (
        4,
        'hard drive back-end',
        'Omnis stultus tamen canto.',
        '5.4.1',
        NULL,
        'OPEN_SOURCE',
        'MAINTENANCE',
        'LOW',
        'REJECTED',
        'CLOUD',
        '2024-09-14 01:07:45.443',
        '2024-09-14 01:07:45.443',
        4,
        4,
        NULL,
        2,
        2
    ),
    (
        5,
        'panel bluetooth',
        'Vesco decumbo sulum terror tendo bos spargo solitudo sit summisse.',
        '1.7.3',
        NULL,
        'UNKNOWN',
        'PROD',
        'LOW',
        'UNKNOWN',
        'CLOUD',
        '2024-09-14 01:07:45.489',
        '2024-09-14 01:07:45.489',
        4,
        3,
        NULL,
        5,
        2
    ),
    (
        6,
        'bus neural',
        'Adfectus aestivus ducimus.',
        '3.4.4',
        NULL,
        'COMMERCIAL',
        'UNKNOWN',
        'LOW',
        'VALIDATED',
        'HYBRID',
        '2024-09-14 01:07:45.512',
        '2025-08-20 18:25:06.224',
        4,
        4,
        NULL,
        3,
        5
    ),
    (
        7,
        'application cross-platform',
        'Rerum acidus carmen.',
        '9.1.9',
        NULL,
        'INTERNAL',
        'MAINTENANCE',
        'UNKNOWN',
        'VALIDATED',
        'ON_PREMISE',
        '2024-09-14 01:07:45.538',
        '2024-09-14 01:07:45.538',
        4,
        4,
        NULL,
        5,
        1
    ),
    (
        8,
        'circuit auxiliary',
        'Termes cura nihil adstringo cubo tribuo.',
        '2.3.7',
        NULL,
        'UNKNOWN',
        'PROD',
        'MEDIUM',
        'REJECTED',
        'CLOUD',
        '2024-09-14 01:07:45.563',
        '2024-09-14 01:07:45.563',
        4,
        4,
        NULL,
        2,
        3
    ),
    (
        10,
        'interface redundant',
        'Civis vel suggero voluptatibus.',
        '4.7.2',
        NULL,
        'COMMERCIAL',
        'DEPRECATED',
        'LOW',
        'REJECTED',
        'UNKNOWN',
        '2024-09-14 01:07:53.523',
        '2024-09-14 01:07:53.523',
        8,
        2,
        NULL,
        5,
        5
    ),
    (
        11,
        'application back-end',
        'Voluptas totidem deporto aestus aer culpa suasoria.',
        '4.9.8',
        NULL,
        'COMMERCIAL',
        'MAINTENANCE',
        'MEDIUM',
        'UNKNOWN',
        'CLOUD',
        '2024-09-14 01:07:53.548',
        '2024-09-14 01:07:53.548',
        8,
        2,
        NULL,
        4,
        3
    ),
    (
        12,
        'protocol solid state',
        'Soleo caecus bene villa valens vivo vallum nisi.',
        '2.7.7',
        NULL,
        'COMMERCIAL',
        'PROD',
        'HIGH',
        'ARCHIVED',
        'ON_PREMISE',
        '2024-09-14 01:07:53.569',
        '2024-09-14 01:07:53.569',
        8,
        1,
        NULL,
        2,
        1
    ),
    (
        13,
        'capacitor multi-byte',
        'Civis illo administratio thermae substantia comedo cruciamentum.',
        '4.9.7',
        NULL,
        'COMMERCIAL',
        'MAINTENANCE',
        'LOW',
        'DRAFT',
        'HYBRID',
        '2024-09-14 01:07:53.588',
        '2024-09-14 01:07:53.588',
        8,
        5,
        NULL,
        4,
        4
    ),
    (
        14,
        'program solid state',
        'Bis conor spoliatio cur.',
        '9.1.2',
        NULL,
        'OPEN_SOURCE',
        'MAINTENANCE',
        'HIGH',
        'REJECTED',
        'UNKNOWN',
        '2024-09-14 01:07:53.608',
        '2024-09-14 01:07:53.608',
        8,
        5,
        NULL,
        5,
        3
    ),
    (
        15,
        'protocol virtual',
        'Quaerat odit laboriosam decipio.',
        '8.5.4',
        NULL,
        'OPEN_SOURCE',
        'UNKNOWN',
        'LOW',
        'DRAFT',
        'HYBRID',
        '2024-09-14 01:07:53.629',
        '2024-09-14 01:07:53.629',
        8,
        2,
        NULL,
        5,
        3
    ),
    (
        16,
        'circuit multi-byte',
        'Terminatio advenio acies ulciscor talis beatae aranea tumultus thymum.',
        '3.6.5',
        NULL,
        'FREEWARE',
        'DEV',
        'HIGH',
        'UNKNOWN',
        'UNKNOWN',
        '2024-09-14 01:07:53.651',
        '2024-09-14 01:07:53.651',
        8,
        2,
        NULL,
        3,
        4
    ),
    (
        17,
        'program cross-platform',
        'Coadunatio torqueo tametsi.',
        '3.6.5',
        NULL,
        'COMMERCIAL',
        'MAINTENANCE',
        'MEDIUM',
        'REJECTED',
        'ON_PREMISE',
        '2024-09-14 01:07:53.673',
        '2024-09-14 01:07:53.673',
        8,
        4,
        NULL,
        3,
        3
    ),
    (
        18,
        'driver online',
        'Coerceo solutio talus strenuus agnosco.',
        '2.0.0',
        NULL,
        'FREEWARE',
        'PROD',
        'MEDIUM',
        'UNKNOWN',
        'UNKNOWN',
        '2024-09-14 01:07:53.693',
        '2024-09-14 01:07:53.693',
        8,
        1,
        NULL,
        3,
        4
    ),
    (
        19,
        'port haptic',
        'Argentum tolero suffragium vis veritatis accommodo ea suppono voveo.',
        '5.2.7',
        NULL,
        'UNKNOWN',
        'DEV',
        'UNKNOWN',
        'VALIDATED',
        'CLOUD',
        '2024-09-14 01:07:53.715',
        '2024-09-14 01:07:53.715',
        8,
        3,
        NULL,
        4,
        4
    ),
    (
        20,
        'driver solid state',
        'Magnam temporibus ab adopto.',
        '0.3.6',
        NULL,
        'COMMERCIAL',
        'PROD',
        'MEDIUM',
        'TO_BE_VALIDATED',
        'UNKNOWN',
        '2024-09-14 01:07:53.736',
        '2024-09-14 01:07:53.736',
        8,
        2,
        NULL,
        1,
        1
    ),
    (
        21,
        'protocol online',
        'Tertius thorax acquiro voluptate adiuvo.',
        '0.7.2',
        NULL,
        'OPEN_SOURCE',
        'PROD',
        'MEDIUM',
        'REJECTED',
        'ON_PREMISE',
        '2024-09-14 01:07:53.757',
        '2024-09-14 01:07:53.757',
        8,
        2,
        NULL,
        5,
        4
    ),
    (
        22,
        'microchip digital',
        'Statua vobis canonicus voro vita qui ambulo cui.',
        '0.7.5',
        NULL,
        'INTERNAL',
        'MAINTENANCE',
        'UNKNOWN',
        'REJECTED',
        'HYBRID',
        '2024-09-14 01:07:53.781',
        '2024-09-14 01:07:53.781',
        8,
        4,
        NULL,
        3,
        3
    ),
    (
        23,
        'firewall back-end',
        'Verecundia attonbitus tribuo auctus terror complectus vilitas denique creo.',
        '5.0.3',
        NULL,
        'COMMERCIAL',
        'DEV',
        'LOW',
        'REJECTED',
        'UNKNOWN',
        '2024-09-14 01:07:53.807',
        '2024-09-14 01:07:53.807',
        8,
        4,
        NULL,
        1,
        3
    ),
    (
        24,
        'driver bluetooth',
        'Titulus doloribus id.',
        '4.1.5',
        NULL,
        'FREEWARE',
        'DEV',
        'LOW',
        'DRAFT',
        'UNKNOWN',
        '2024-09-14 01:07:53.827',
        '2024-09-14 01:07:53.827',
        8,
        1,
        NULL,
        2,
        2
    ),
    (
        25,
        'matrix digital',
        'Temeritas virga numquam hic appono terminatio abscido tergeo cura votum.',
        '8.6.9',
        NULL,
        'UNKNOWN',
        'UNKNOWN',
        'UNKNOWN',
        'ARCHIVED',
        'HYBRID',
        '2024-09-14 01:07:53.847',
        '2024-09-14 01:07:53.847',
        8,
        5,
        NULL,
        2,
        2
    ),
    (
        26,
        'pixel neural',
        'Pecto vesica tripudio.',
        '6.3.1',
        NULL,
        'UNKNOWN',
        'PROD',
        'LOW',
        'TO_BE_VALIDATED',
        'ON_PREMISE',
        '2024-09-14 01:07:53.868',
        '2024-09-14 01:07:53.868',
        8,
        5,
        NULL,
        3,
        3
    ),
    (
        27,
        'sensor wireless',
        'Administratio abundans veritas vetus volup angelus.',
        '8.6.1',
        NULL,
        'EXTERNAL',
        'PROD',
        'LOW',
        'VALIDATED',
        'HYBRID',
        '2024-09-14 01:07:53.889',
        '2024-09-14 01:07:53.889',
        8,
        4,
        NULL,
        3,
        4
    ),
    (
        28,
        'driver haptic',
        'Eaque vesco appello curo.',
        '7.4.2',
        NULL,
        'COMMERCIAL',
        'PROD',
        'MEDIUM',
        'UNKNOWN',
        'ON_PREMISE',
        '2024-09-14 01:07:53.909',
        '2024-09-14 01:07:53.909',
        8,
        2,
        NULL,
        3,
        5
    ),
    (
        29,
        'alarm neural',
        'Talio vulgo eius.',
        '7.6.7',
        NULL,
        'UNKNOWN',
        'PROD',
        'UNKNOWN',
        'TO_BE_VALIDATED',
        'ON_PREMISE',
        '2024-09-14 01:07:53.945',
        '2024-09-14 01:07:53.945',
        8,
        4,
        NULL,
        4,
        4
    ),
    (
        30,
        'monitor 1080p',
        'Canis ea voluptas veritas usque adduco stips sed dens numquam.',
        '6.3.4',
        NULL,
        'FREEWARE',
        'PROD',
        'UNKNOWN',
        'DRAFT',
        'ON_PREMISE',
        '2024-09-14 01:07:53.987',
        '2024-09-14 01:07:53.987',
        8,
        4,
        NULL,
        4,
        2
    ),
    (
        31,
        'pixel 1080p',
        'Architecto sponte ater.',
        '5.5.9',
        NULL,
        'UNKNOWN',
        'DEV',
        'LOW',
        'ARCHIVED',
        'UNKNOWN',
        '2024-09-14 01:07:54.024',
        '2024-09-14 01:07:54.024',
        8,
        5,
        NULL,
        2,
        5
    ),
    (
        32,
        'monitor primary',
        'Denique viridis suspendo advenio blanditiis caute vitae in patruus.',
        '1.4.2',
        NULL,
        'UNKNOWN',
        'UNKNOWN',
        'MEDIUM',
        'UNKNOWN',
        'ON_PREMISE',
        '2024-09-14 01:07:54.057',
        '2024-09-14 01:07:54.057',
        8,
        3,
        NULL,
        5,
        2
    ),
    (
        33,
        'array redundant',
        'Torrens eos vivo ab crepusculum surculus.',
        '1.7.8',
        NULL,
        'INTERNAL',
        'UNKNOWN',
        'LOW',
        'ARCHIVED',
        'UNKNOWN',
        '2024-09-14 01:07:54.094',
        '2024-09-14 01:07:54.094',
        8,
        4,
        NULL,
        4,
        3
    ),
    (
        34,
        'microchip online',
        'Tendo claudeo ullam decretum animus abutor nemo voveo.',
        '7.0.1',
        NULL,
        'UNKNOWN',
        'PROD',
        'UNKNOWN',
        'ARCHIVED',
        'UNKNOWN',
        '2024-09-14 01:07:54.121',
        '2024-09-14 01:07:54.121',
        8,
        4,
        NULL,
        1,
        3
    ),
    (
        35,
        'application open-source',
        NULL,
        NULL,
        NULL,
        NULL,
        'DEV',
        'HIGH',
        'DRAFT',
        NULL,
        '2024-09-15 23:19:27.154',
        '2024-09-15 23:19:27.154',
        21,
        4,
        5,
        NULL,
        4
    ),
    (
        36,
        'yo',
        'THU',
        '8.2.5',
        NULL,
        'EXTERNAL',
        'PROD',
        'LOW',
        'TO_BE_VALIDATED',
        'CLOUD',
        '2024-09-15 23:20:43.554',
        '2024-09-16 02:20:46.820',
        21,
        2,
        2,
        5,
        4
    ),
    (
        37,
        'Another test 4',
        NULL,
        NULL,
        NULL,
        NULL,
        'MAINTENANCE',
        'LOW',
        'DRAFT',
        NULL,
        '2024-09-17 03:03:00.474',
        '2024-09-17 03:03:00.474',
        21,
        NULL,
        NULL,
        NULL,
        4
    );

--
-- Dumping data for table `accountable`
--
INSERT INTO
    `accountable` (`appId`, `userId`, `createdAt`, `updatedAt`)
VALUES
    (
        1,
        4,
        '2024-09-16 00:16:22.010',
        '2024-09-16 00:16:22.010'
    ),
    (
        2,
        4,
        '2024-09-14 01:07:45.349',
        '2024-09-14 01:07:45.349'
    ),
    (
        2,
        8,
        '2024-09-14 01:07:45.349',
        '2024-09-14 01:07:45.349'
    ),
    (
        3,
        1,
        '2024-09-14 01:07:45.419',
        '2024-09-14 01:07:45.419'
    ),
    (
        3,
        4,
        '2024-09-14 01:07:45.419',
        '2024-09-14 01:07:45.419'
    ),
    (
        4,
        4,
        '2024-09-14 01:07:45.443',
        '2024-09-14 01:07:45.443'
    ),
    (
        4,
        5,
        '2024-09-14 01:07:45.443',
        '2024-09-14 01:07:45.443'
    ),
    (
        5,
        2,
        '2024-09-14 01:07:45.489',
        '2024-09-14 01:07:45.489'
    ),
    (
        5,
        4,
        '2024-09-14 01:07:45.489',
        '2024-09-14 01:07:45.489'
    ),
    (
        6,
        4,
        '2024-09-14 01:07:45.512',
        '2024-09-14 01:07:45.512'
    ),
    (
        6,
        10,
        '2024-09-14 01:07:45.512',
        '2024-09-14 01:07:45.512'
    ),
    (
        7,
        4,
        '2024-09-14 01:07:45.538',
        '2024-09-14 01:07:45.538'
    ),
    (
        7,
        8,
        '2024-09-14 01:07:45.538',
        '2024-09-14 01:07:45.538'
    ),
    (
        8,
        4,
        '2024-09-14 01:07:45.563',
        '2024-09-14 01:07:45.563'
    ),
    (
        8,
        6,
        '2024-09-14 01:07:45.563',
        '2024-09-14 01:07:45.563'
    ),
    (
        10,
        6,
        '2024-09-14 01:07:53.523',
        '2024-09-14 01:07:53.523'
    ),
    (
        10,
        8,
        '2024-09-14 01:07:53.523',
        '2024-09-14 01:07:53.523'
    ),
    (
        11,
        1,
        '2024-09-14 01:07:53.548',
        '2024-09-14 01:07:53.548'
    ),
    (
        11,
        8,
        '2024-09-14 01:07:53.548',
        '2024-09-14 01:07:53.548'
    ),
    (
        12,
        3,
        '2024-09-14 01:07:53.569',
        '2024-09-14 01:07:53.569'
    ),
    (
        12,
        8,
        '2024-09-14 01:07:53.569',
        '2024-09-14 01:07:53.569'
    ),
    (
        13,
        1,
        '2024-09-14 01:07:53.588',
        '2024-09-14 01:07:53.588'
    ),
    (
        13,
        8,
        '2024-09-14 01:07:53.588',
        '2024-09-14 01:07:53.588'
    ),
    (
        14,
        2,
        '2024-09-14 01:07:53.608',
        '2024-09-14 01:07:53.608'
    ),
    (
        14,
        8,
        '2024-09-14 01:07:53.608',
        '2024-09-14 01:07:53.608'
    ),
    (
        15,
        6,
        '2024-09-14 01:07:53.629',
        '2024-09-14 01:07:53.629'
    ),
    (
        15,
        8,
        '2024-09-14 01:07:53.629',
        '2024-09-14 01:07:53.629'
    ),
    (
        16,
        8,
        '2024-09-14 01:07:53.651',
        '2024-09-14 01:07:53.651'
    ),
    (
        16,
        10,
        '2024-09-14 01:07:53.651',
        '2024-09-14 01:07:53.651'
    ),
    (
        17,
        4,
        '2024-09-14 01:07:53.673',
        '2024-09-14 01:07:53.673'
    ),
    (
        17,
        8,
        '2024-09-14 01:07:53.673',
        '2024-09-14 01:07:53.673'
    ),
    (
        18,
        8,
        '2024-09-14 01:07:53.693',
        '2024-09-14 01:07:53.693'
    ),
    (
        18,
        9,
        '2024-09-14 01:07:53.693',
        '2024-09-14 01:07:53.693'
    ),
    (
        19,
        4,
        '2024-09-14 01:07:53.715',
        '2024-09-14 01:07:53.715'
    ),
    (
        19,
        8,
        '2024-09-14 01:07:53.715',
        '2024-09-14 01:07:53.715'
    ),
    (
        20,
        8,
        '2024-09-14 01:07:53.736',
        '2024-09-14 01:07:53.736'
    ),
    (
        20,
        10,
        '2024-09-14 01:07:53.736',
        '2024-09-14 01:07:53.736'
    ),
    (
        21,
        4,
        '2024-09-14 01:07:53.757',
        '2024-09-14 01:07:53.757'
    ),
    (
        21,
        8,
        '2024-09-14 01:07:53.757',
        '2024-09-14 01:07:53.757'
    ),
    (
        22,
        1,
        '2024-09-14 01:07:53.781',
        '2024-09-14 01:07:53.781'
    ),
    (
        22,
        8,
        '2024-09-14 01:07:53.781',
        '2024-09-14 01:07:53.781'
    ),
    (
        23,
        4,
        '2024-09-14 01:07:53.807',
        '2024-09-14 01:07:53.807'
    ),
    (
        23,
        8,
        '2024-09-14 01:07:53.807',
        '2024-09-14 01:07:53.807'
    ),
    (
        24,
        3,
        '2024-09-14 01:07:53.827',
        '2024-09-14 01:07:53.827'
    ),
    (
        24,
        8,
        '2024-09-14 01:07:53.827',
        '2024-09-14 01:07:53.827'
    ),
    (
        25,
        4,
        '2024-09-14 01:07:53.847',
        '2024-09-14 01:07:53.847'
    ),
    (
        25,
        8,
        '2024-09-14 01:07:53.847',
        '2024-09-14 01:07:53.847'
    ),
    (
        26,
        4,
        '2024-09-14 01:07:53.868',
        '2024-09-14 01:07:53.868'
    ),
    (
        26,
        8,
        '2024-09-14 01:07:53.868',
        '2024-09-14 01:07:53.868'
    ),
    (
        27,
        7,
        '2024-09-14 01:07:53.889',
        '2024-09-14 01:07:53.889'
    ),
    (
        27,
        8,
        '2024-09-14 01:07:53.889',
        '2024-09-14 01:07:53.889'
    ),
    (
        28,
        1,
        '2024-09-14 01:07:53.909',
        '2024-09-14 01:07:53.909'
    ),
    (
        28,
        8,
        '2024-09-14 01:07:53.909',
        '2024-09-14 01:07:53.909'
    ),
    (
        29,
        1,
        '2024-09-14 01:07:53.945',
        '2024-09-14 01:07:53.945'
    ),
    (
        29,
        8,
        '2024-09-14 01:07:53.945',
        '2024-09-14 01:07:53.945'
    ),
    (
        30,
        8,
        '2024-09-14 01:07:53.987',
        '2024-09-14 01:07:53.987'
    ),
    (
        30,
        9,
        '2024-09-14 01:07:53.987',
        '2024-09-14 01:07:53.987'
    ),
    (
        31,
        4,
        '2024-09-14 01:07:54.024',
        '2024-09-14 01:07:54.024'
    ),
    (
        31,
        8,
        '2024-09-14 01:07:54.024',
        '2024-09-14 01:07:54.024'
    ),
    (
        32,
        7,
        '2024-09-14 01:07:54.057',
        '2024-09-14 01:07:54.057'
    ),
    (
        32,
        8,
        '2024-09-14 01:07:54.057',
        '2024-09-14 01:07:54.057'
    ),
    (
        33,
        2,
        '2024-09-14 01:07:54.094',
        '2024-09-14 01:07:54.094'
    ),
    (
        33,
        8,
        '2024-09-14 01:07:54.094',
        '2024-09-14 01:07:54.094'
    ),
    (
        34,
        3,
        '2024-09-14 01:07:54.121',
        '2024-09-14 01:07:54.121'
    ),
    (
        34,
        8,
        '2024-09-14 01:07:54.121',
        '2024-09-14 01:07:54.121'
    );


--
-- Dumping data for table `_applicationtolanguage`
--
INSERT INTO
    `_ApplicationToLanguage` (`A`, `B`)
VALUES
    (1, 1),
    (20, 2),
    (23, 2),
    (32, 2),
    (33, 2),
    (34, 2),
    (4, 3),
    (11, 3),
    (21, 3),
    (5, 4),
    (6, 4),
    (12, 4),
    (13, 4),
    (14, 4),
    (30, 4),
    (31, 4),
    (36, 4),
    (2, 5),
    (6, 5),
    (8, 5),
    (18, 5),
    (17, 6),
    (19, 6),
    (22, 6),
    (25, 6),
    (26, 6),
    (7, 8),
    (15, 8),
    (24, 8),
    (3, 9),
    (28, 9),
    (29, 9),
    (10, 10),
    (16, 10),
    (27, 10);

--
-- Dumping data for table `_applicationtosoftware`
--
INSERT INTO
    `_ApplicationToSoftware` (`A`, `B`)
VALUES
    (2, 1),
    (26, 1),
    (15, 2),
    (20, 2),
    (24, 2),
    (3, 3),
    (4, 3),
    (8, 3),
    (11, 3),
    (17, 3),
    (22, 3),
    (1, 4),
    (10, 4),
    (13, 4),
    (36, 4),
    (6, 5),
    (19, 5),
    (30, 5),
    (6, 6),
    (18, 6),
    (21, 6),
    (28, 6),
    (33, 6),
    (34, 7),
    (12, 8),
    (16, 8),
    (29, 9),
    (32, 9),
    (5, 10),
    (7, 10),
    (14, 10),
    (23, 10),
    (25, 10),
    (27, 10),
    (31, 10);

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */
;

/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */
;

/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */
;