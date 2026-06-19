import { PDFDocument } from 'pdf-lib'
import { readFileSync, readdirSync, writeFileSync, existsSync } from 'node:fs'

const dir = 'png-slides'
const files = readdirSync(dir)
  .filter(f => /^\d+\.png$/.test(f))
  .sort((a, b) => parseInt(a) - parseInt(b))

if (!files.length) { console.log('no png'); process.exit(1) }
console.log('assembling', files.length, 'slides')

const pdf = await PDFDocument.create()

for (const f of files) {
  const pngBytes = readFileSync(`${dir}/${f}`)
  const img = await pdf.embedPng(pngBytes)
  const page = pdf.addPage([img.width, img.height])
  page.drawImage(img, { x: 0, y: 0, width: img.width, height: img.height })
}

const out = await pdf.save()
writeFileSync('slides-export.pdf', out)
console.log('DONE -> slides-export.pdf', out.length, 'bytes')
