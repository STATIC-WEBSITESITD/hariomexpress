import React from 'react'
import { Container } from 'react-bootstrap'
import Header from '../components/Header'
import CtaBanner from '../components/CtaBanner'
import Footer from '../components/Footer'
import { documents } from '../data/documents'

function DownloadLink({ format, href, download }) {
  const isExcel = format === 'excel'
  const label = isExcel ? 'Excel' : 'PDF'

  return (
    <a
      className={`btn btn-sm btn-outline-${isExcel ? 'success' : 'danger'}`}
      href={href || '#'}
      download={download}
      onClick={href ? undefined : (e) => e.preventDefault()}
    >
      <i className={`fas fa-file-${isExcel ? 'excel' : 'pdf'} me-1`} aria-hidden />
      {label}
    </a>
  )
}

function Documents() {
  return (
    <>
      <Header />

      <section className="page-banner">
        <Container>
          <p className="page-banner-kicker">HariOm Express</p>
          <h1 className="page-banner-title">Documents</h1>
          <p className="page-banner-text">
            Download customs clearance forms for international shipments. Fill
            them in when you do not already have a copy on hand.
          </p>
        </Container>
      </section>

      <section className="documents-page-section section-padding">
        <Container>
          <div className="card h-100 border-0 shadow-sm mb-4">
            <div className="card-body p-4 p-md-5">
              <div className="title-box mb-3">
                <h3 className="mb-0">
                  Download <span className="text-primary-custom">Documents</span>
                </h3>
              </div>
              <p className="p-intro p-intro-small mb-4">
                Please download and fill in the following forms for customs
                clearance in case you do not have a copy of the same.
              </p>
              <div className="table-responsive">
                <table className="table table-bordered align-middle mb-0 documents-table">
                  <thead className="table-light">
                    <tr>
                      <th style={{ minWidth: 320 }}>Document Head</th>
                      <th style={{ width: 140 }} className="text-center">
                        Excel
                      </th>
                      <th style={{ width: 140 }} className="text-center">
                        PDF
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {documents.map((doc) => (
                      <tr key={doc.name}>
                        <td className="text-muted">{doc.name}</td>
                        <td className="text-center">
                          <DownloadLink
                            format="excel"
                            href={doc.excelUrl}
                            download={doc.downloadAll ? 'all-forms.zip' : undefined}
                          />
                        </td>
                        <td className="text-center">
                          <DownloadLink format="pdf" href={doc.pdfUrl} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CtaBanner />
      <Footer />
    </>
  )
}

export default Documents
