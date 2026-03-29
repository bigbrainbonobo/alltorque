# JR. Diesel - Diesel & Heavy Vehicle Mechanics

## Site Overview
- **Domain**: alltorque.xyz
- **Business**: Diesel and heavy vehicle mechanics in Geelong, Australia
- **Business Name**: "JR. Diesel"

## Design System
- **Style**: Industrial
- **Fonts**: Oswald (headings), Open Sans (body) - Google Fonts
- **Colors**:
  - Background dark: #1a1a1a
  - Background darker: #111111
  - Card background: #242424
  - Accent (orange): #f59e0b
  - Accent hover: #d97706
  - Text: #ffffff
  - Text muted: #9ca3af
  - Border: #333333

## Services (in order)
1. Heavy Vehicle Service
2. Fleet Maintenance
3. Diesel Engine Repair
4. Petrol Vehicles

## Infrastructure
- **Nginx server**: 10.0.0.4
- **NPM (Nginx Proxy Manager)**: 10.0.0.3
- **Server path**: /var/www/sites/alltorque
- **SSL**: Let's Encrypt via NPM
- **Cloudflare**: Proxied (orange cloud), SSL mode Full (Strict)
- **Access restriction**: Cloudflare IPs only (configured in NPM)

## Deployment
```bash
scp -r /home/mark/web/alltorque/* mark@10.0.0.4:/var/www/sites/alltorque/
```

## DNS Records (Cloudflare)
- alltorque.xyz → A record → [your public IP] (proxied)
- www.alltorque.xyz → A record → [your public IP] (proxied)

## Files
- `index.html` - Main production page
- `preview-industrial.html` - Original industrial style preview
- `preview-bold.html` - Alternative bold style (not used)
- `preview-professional.html` - Alternative professional style (not used)

## TODO
- Add testimonials section
- Add contact form / booking section
- Add location/map section
- Add real workshop photos
- Add mobile hamburger menu
